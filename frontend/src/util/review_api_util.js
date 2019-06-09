import axios from "axios";

export const fetchReviews = id => {
  return axios.get(`/api/reviews/user/${id}`);
};

export const addReview = data => {
  return axios.post("/api/reviews", data);
};
