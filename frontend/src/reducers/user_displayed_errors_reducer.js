import {
  RECEIVE_NO_USER_ERRORS,
  RECEIVE_CANNOT_RATE_ERRORS
} from "../actions/user_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NO_USER_ERRORS:
      return action.errors;
    case RECEIVE_CANNOT_RATE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
