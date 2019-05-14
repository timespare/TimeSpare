const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Listing = require("../../models/Listing");
const validateListingInput = require("../../validation/listings");

router.get("/", (req, res) => {
  Listing.find()
    .sort({ date: -1 })
    .limit(10)
    // .populate('user')
    .then(listings => res.json(listings))
    .catch(err =>
      res.status(404).json({ nolistingsfound: "No Listings found" })
    );
});

// listings for a specific user
router.get("/user/:user_id", (req, res) => {
  Listing.find({ user: req.params.user_id })
    .then(listings => res.json(listings))
    .catch(err =>
      res.status(404).json({ nolistingsfound: "No Listings nor the User" })
    );
});

// listings for current user
<<<<<<< HEAD
router.get('/current', 
=======
router.get(
  "/current",
>>>>>>> master
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Listing.find({ user: req.user._id })
      .then(listings => res.json(listings))
      .catch(err =>
        res.status(404).json({ nolistingsfound: "No Listings nor the User" })
      );
  }
);

router.get("/:id", (req, res) => {
  Listing.findById(req.params.id)
    .then(listing => res.json(listing))
    .catch(err =>
      res.status(404).json({ nolistingfound: "No Listing found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    debugger
    const { errors, isValid } = validateListingInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    debugger
    const newListing = new Listing({
      title: req.body.title,
      description: req.body.description,
      begin: req.body.begin,
      end: req.body.end,
      tags: req.body.tags,
      user: req.user.id,
      price: req.body.price
    });

    newListing
      .save()
      .then(listing => res.json(listing))
      .catch(err =>
        res.status(402).json({ createlistingerror: "cannot create" })
      );
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateListingInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Listing.findById(req.params.id)
      .then(listing => {
        listing.description = req.body.description;
        listing.title = req.body.title;
        listing.begin = req.body.begin;
        listing.end = req.body.end;
        listing.tags = req.body.tags;
        listing.price = req.body.price;
        listing.save().then(listing => res.json(listing));
      })
      .catch(err =>
        res.status(400).json({ updatelistingerror: "Cannot update" })
      );
  }
);

router.delete("/:id", (req, res) => {
  Listing.findByIdAndDelete(req.params.id, (err, listing) => {
    if (err) {
      res.json(err);
    } else {
      res.json(listing);
    }
  });
});

module.exports = router;
