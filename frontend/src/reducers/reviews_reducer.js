import {
  RECEIVE_A_REVIEW,
  RECEIVE_ALL_REVIEWS
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_A_REVIEW:
      return Object.assign({}, state, { [action.review._id]: action.review });
    default:
      return state;
  }
};
export default reviewsReducer;
