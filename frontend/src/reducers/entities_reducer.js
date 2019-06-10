import { combineReducers } from "redux";

import listings from "./listings_reducer";
import bookings from "./booking_reducer";
import userDisplayed from "./user_displayed_reducer";
import reviews from "./reviews_reducer";
export default combineReducers({
  listings,
  bookings,
  userDisplayed,
  reviews
});
