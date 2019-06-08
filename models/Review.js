const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = Review = mongoose.model("reviews", ReviewSchema);
