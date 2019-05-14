import axios from "axios";

export const fetchBooking = () => {
  return axios.get("/api/booking");
};

export const fetchCurrentUserBookings = () => {
  return axios.get("/api/bookings/current");
};

export const createBooking = data => {
  return axios.post("/api/bookings", data);
};

export const deleteBooking = id => {
  return axios.delete(`/api/bookings/${id}`);
};
