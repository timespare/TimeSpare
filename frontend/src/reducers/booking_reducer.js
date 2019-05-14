import {
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  RECEIVE_BOOKINGS
} from "../actions/booking_actions";
import { object } from "prop-types";

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING:
      let booking = action.booking;
      return Object.assign({}, state, { [booking._id]: booking });
    case REMOVE_BOOKING:
      let newstate = Object.assign({}, state);
      delete newstate[action.id];
      return newstate;
    case RECEIVE_BOOKINGS:
      return Object.assign({}, action.bookings);
    default:
      return state;
  }
};

export default bookingReducer;
