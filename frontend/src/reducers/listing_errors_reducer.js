import {
  RECEIVE_LISTING_ERRORS,
  REMOVE_LISTING_ERRORS
} from "../actions/listing_actions";

const listingErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      if (typeof action.errors === "string") {
        return { LoginErr: action.errors };
      }

      return action.errors;
    case REMOVE_LISTING_ERRORS:
      return {};
    default:
      return state;
  }
};

export default listingErrorsReducer;
