const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Booking = require("../../models/Booking");

// get all bookings for current user
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Booking.find({ user: req.user._id })
      .populate("listing")
      .then(bookings => res.json(bookings))
      .catch(err =>
        res.status(404).json({ nobookingsfound: "No Bookings nor the User" })
      );
  }
);

// create a new booking
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    const newBooking = new Booking({
      user: req.user.id,
      listing: req.body.listingId
    });
    newBooking
      .save()
      .then(booking => res.json(booking))
      .catch(err =>
        res.status(402).json({ createbookingerror: "cannot create booking" })
      );
  }
);

// delete a booking

router.delete("/:id", (req, res) => {
  Booking.findByIdAndDelete(req.params.id, (err, booking) => {
    if (err) {
      res.json(err);
    } else {
      res.json(booking);
    }
  });
});

module.exports = router;
