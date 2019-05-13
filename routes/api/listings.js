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

// create a listing
router.post('/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    // console.log(req.body);
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

// update a listing, missing handler
router.patch('/:id', (req, res) => {
  const { errors, isValid } = validateListingInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Listing.findByIdAndUpdate()

  Listing.findById(req.params.id)
  .then(listing => {
    listing.description = req.body.description;
    listing.begin = req.body.begin;
    listing.end = req.body.end;
    listing.tags = req.body.tags;
    listing.save().then(listing => res.json(listing));
  })
  .catch(err => res.status(400).json({updatelistingerror: 'Cannot update'}))
})


// destroy a listing
router.delete('/:id', (req, res) => {
  Listing.findByIdAndDelete(req.params.id, (err, listing) => {
    if (err) {
        res.json(err);  
    } else {
      res.json(listing);
    }
  })
})

module.exports = router;