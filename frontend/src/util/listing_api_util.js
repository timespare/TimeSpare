import axios from "axios";

// TODO: check on routes

// fetch 10 - 15 listings for listing index page
export const fetchListings = () => {
  return axios.get("/api/listings/");
};

// fetch all listings for the current user
export const fetchCurrentUserListings = () => {
  return axios.get("/api/listings/current");
};

// create a new listing
export const addListing = data => {
  return axios.post("/api/listings", data);
};

// edit a listing
export const editListing = data => {
  return axios.patch(`/api/listings/${data._id}`, data);
};

export const deleteListing = id => {
  return axios.delete(`/api/listings/${id}`);
};
