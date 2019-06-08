import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_A_REVIEW = "RECEIVE_A_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const convertReviewArrayToObject = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]._id] = arr[i];
  }
  return obj;
};

const receiveAllReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews: convertReviewArrayToObject(reviews)
  };
};
const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

const receiveAReview = review => {
  return {
    type: RECEIVE_A_REVIEW,
    review
  };
};

export const getUserReviews = userId => dispatch =>
  ReviewAPIUtil.fetchReviews(userId).then(
    reviews => dispatch(receiveAllReviews(reviews.data)),
    errors => dispatch(receiveReviewErrors(errors.response.data))
  );

export const createReview = review => dispatch => {
  return ReviewAPIUtil.addReview(review).then(
    review => dispatch(receiveAReview(review.data)),
    errors => dispatch(receiveReviewErrors(errors.response.data))
  );
};
