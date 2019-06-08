const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Review = require("../../models/Review");
const validateReviewInput = require("../../validation/reviews");
// add a review, require logged in

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newReview = new Review({
      title: req.body.title,
      body: req.body.body,
      user: req.body.ownerId, // listing owner
      author: req.user.id // currentUser/commenter
    });
    newReview
      .save()
      .then(review => review.populate("author", "username").execPopulate()) // execPopulate returns a promise
      .then(review => res.json(review))
      .catch(err =>
        res.status(402).json({ createReviewError: "cannot create review." })
      );
  }
);

// fetch (15) reviews

router.get("/user/:user_id", (req, res) => {
  Review.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .limit(15)
    .populate("author", "username")
    .then(review => res.json(review))
    .catch(err => res.status(404).json({ noReviewFound: "No review found" }));
});

module.exports = router;
