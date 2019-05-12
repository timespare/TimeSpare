const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Listing = require('../../models/Listing');
const validateListingInput = require('../../validation/listings');

// listings for user booked
router.get('/', (req, res) => {
  // dont know how to do, change it later
  Listing.find()
  .then(listings => res.json(listings))
  .catch(err => res.status(404).json({nolistingsfound: 'No Listings found'}));
})

// listings for a specific user
router.get('/user/:user_id', (req, res) => {
  Listing.find({user: req.params.user_id})
  .then(listings => res.json(listings))
  .catch(err => res.status(404).json({nolistingsfound: 'No Listings from the User'}));
})

// one specific listing
router.get('/:id', (req, res) => {
  Listing.findById(req.params.id)
  .then(listing => res.json(listing))
  .catch(err => res.status(404).json({nolistingfound: 'No Listing found with that ID'}));
})

// create a listing, not sure abt the url
router.post('/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const { errors, isValid } = validateListingInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // not sure if we put the user, or just the id
    const newListing = new Listing({
      description: req.body.description,
      begin: req.body.begin,
      end: req.body.end,
      tags: req.body.tags,
      user: req.user.id
    })

    newListing.save().then(listing => res.json(listing));
  }
)

// update a listing


// destroy a listing