const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  background: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    default: 0
  },
  rateBase: {
    type: Number,
    default: 0
  }
});

module.exports = User = mongoose.model("users", UserSchema);
