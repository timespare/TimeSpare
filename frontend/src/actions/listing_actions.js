import * as ListingAPIUtil from "../util/listing_api_util";

// import jwt_decode from "jwt-decode";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_CURRENT_USER_LISTINGS = "RECEIVE_CURRENT_USER_LISTINGS";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";
export const RECEIVE_A_LISTING = "RECEIVE_A_LISTING";
export const REMOVE_A_LISTING = "REMOVE_A_LISTING";
export const REMOVE_LISTING_ERRORS = "REMOVE_LISTING_ERRORS";

const convertListingArrayToObject = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]._id] = arr[i];
  }
  return obj;
};

const receiveAllListings = listings => {
  return {
    type: RECEIVE_ALL_LISTINGS,
    listings: convertListingArrayToObject(listings)
  };
};

const receiveCurrentUserListings = listings => {
  return {
    type: RECEIVE_CURRENT_USER_LISTINGS,
    listings: convertListingArrayToObject(listings)
  };
};

const receiveListingErrors = errors => {
  return {
    type: RECEIVE_LISTING_ERRORS,
    errors
  };
};

const removeAListing = listingId => {
  return {
    type: REMOVE_A_LISTING,
    listingId
  };
};

const receiveAListing = listing => {
  // debugger
  return {
    type: RECEIVE_A_LISTING,
    listing
  };
};

export const removeListingErrors = () => {
  return {
    type: REMOVE_LISTING_ERRORS
  };
};

// TODO: fetch all listings return an array of data
export const getAllListings = () => dispatch =>
  ListingAPIUtil.fetchListings().then(
    listings => dispatch(receiveAllListings(listings.data)),
    error => dispatch(receiveListingErrors(error.response.data))
  );

export const getCurrentUserListings = () => dispatch =>
  ListingAPIUtil.fetchCurrentUserListings().then(
    listings => dispatch(receiveCurrentUserListings(listings.data)),
    errors => dispatch(receiveListingErrors(errors.response.data))
  );

export const createListing = listing => dispatch => {
  debugger
  return ListingAPIUtil.addListing(listing).then(
    listing => dispatch(receiveAListing(listing.data)),
    errors => dispatch(receiveListingErrors(errors.response.data))
  );
}

export const editListing = listing => dispatch =>
  ListingAPIUtil.editListing(listing).then(
    listing => dispatch(receiveAListing(listing.data)),
    errors => dispatch(receiveListingErrors(errors.response.data))
  );

export const deleteListing = id => dispatch =>
  ListingAPIUtil.deleteListing(id).then(
    listing => dispatch(removeAListing(listing.id)),
    errors => dispatch(receiveListingErrors(errors.response.data))
  );
