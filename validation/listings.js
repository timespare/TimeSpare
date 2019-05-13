const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateListingInput(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : "";
  data.title = validText(data.title) ? data.title : "";
  data.begin = validText(data.begin) ? data.begin : "";
  data.end = validText(data.end) ? data.end : "";
  
  if (!Validator.isLength(data.description, { min: 5 })) {
    errors.description = 'Listing must have at least 5 characters'
  }

  if (!Validator.isLength(data.title, { min: 5 })) {
    errors.title = 'Title must have at least 5 chars';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Listing must have description';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Listing must have title';
  }

  if (Validator.isEmpty(data.begin)) {
    errors.begin = 'Listing must have a begin time'
  }
  
  if (Validator.isEmpty(data.end)) {
    errors.end = 'Listing must have an end time'
  }

  if (!Validator.isBefore(data.begin, data.end)) {
    errors.time = 'Time is invalid'
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  };
}