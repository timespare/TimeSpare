import { combineReducers } from "redux";

import listings from "./listings_reducer";
import bookings from "./booking_reducer";
export default combineReducers({
  listings,
  bookings
});
