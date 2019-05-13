const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
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
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model('listing', ListingSchema);