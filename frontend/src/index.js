import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/user_api_util";
import { logout } from "./actions/user_actions";
import Root from "./root";
import "./globalStyle.css";

// TODO: REMOVE AFTER TESTING
import {
  login,
  signup,
  fetchAnotherUser,
  rateUser
} from "./actions/user_actions";
import {
  getAllListings,
  getCurrentUserListings,
  createListing,
  editListing,
  deleteListing
} from "./actions/listing_actions";
import {
  createBooking,
  getBooking,
  deleteBooking,
  getCurrentUserBookings
} from "./actions/booking_actions";
import { createReview, getUserReviews } from "./actions/review_actions";
// TODO: END

document.addEventListener("DOMContentLoaded", () => {
  //   const root = document.getElementById("root");
  let store;
  // If a returning user has a session token stored in localStorage
  if (localStorage.getItem("jwtToken")) {
    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.getItem("jwtToken"));

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.getItem("jwtToken"));

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById("root");

  window.axios = axios;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getAllListings = getAllListings;
  window.getCurrentUserListings = getCurrentUserListings;
  window.createBooking = createListing;
  window.editListing = editListing;
  window.deleteListing = deleteListing;
  window.dispatch = store.dispatch;
  window.state = store.getState;
  window.createBooking = createBooking;
  window.getBooking = getBooking;
  window.getCurrentUserBookings = getCurrentUserBookings;
  window.deleteBooking = deleteBooking;
  window.fetchAnotherUser = fetchAnotherUser;
  window.rateUser = rateUser;
  window.createReview = createReview;
  window.getUserReviews = getUserReviews;
  ReactDOM.render(<Root store={store} />, root);
});
