import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_CURRENT_USER_LISTINGS,
  RECEIVE_A_LISTING,
  REMOVE_A_LISTING
} from "../actions/listing_actions";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return Object.assign({}, state, action.listings);
    case RECEIVE_CURRENT_USER_LISTINGS:
      return Object.assign({}, action.listings);
    case RECEIVE_A_LISTING:
      let l = action.listing;
      return Object.assign({}, state, { [l._id]: l });
    case REMOVE_A_LISTING:
      let newState = Object.assign({}, state);
      delete newState[action.listingId];
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
