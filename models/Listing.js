const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  begin: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  tags: {
    type: [String]
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

ListingSchema.index({ title: "text" }, { default_language: "none" });

module.exports = Listing = mongoose.model("listings", ListingSchema);
