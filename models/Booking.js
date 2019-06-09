
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  listing: {
    type: Schema.Types.ObjectId,
    ref: "listings"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Booking = mongoose.model("bookings", BookingSchema);
