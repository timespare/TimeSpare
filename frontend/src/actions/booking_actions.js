import * as BookingAPIUtil from "../util/booking_api_util";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

const convertBookingArrayToObject = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]._id] = arr[i];
  }
  return obj;
};
const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

const removeBooking = id => {
  return {
    type: REMOVE_BOOKING,
    id
  };
};

const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings: convertBookingArrayToObject(bookings)
  };
};

export const getBooking = id => dispatch =>
  BookingAPIUtil.fetchBooking(id).then(booking =>
    dispatch(receiveBooking(booking.data))
  );

export const createBooking = booking => dispatch => {
  return BookingAPIUtil.createBooking(booking).then(booking =>
    dispatch(receiveBooking(booking.data))
  );
}

export const getCurrentUserBookings = () => dispatch =>
  BookingAPIUtil.fetchCurrentUserBookings().then(bookings =>
    dispatch(receiveBookings(bookings.data))
  );

export const deleteBooking = id => dispatch =>
  BookingAPIUtil.deleteBooking(id).then(booking =>
    dispatch(removeBooking(booking.data._id))
  );
