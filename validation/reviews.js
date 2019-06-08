const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.body = validText(data.description) ? data.description : "";
  data.title = validText(data.title) ? data.title : "";

  if (Validator.isEmpty(data.title)) {
    error.title = "Review must have title";
  }

  if (Validator.isEmpty(data.body)) {
    error.body = "Review must have body";
  }

  if (!Validator.isLength(data.title, { min: 2 })) {
    errors.title = "Title must have at least 2 characters";
  }

  if (!Validator.isLength(data.body, { min: 2 })) {
    errors.body = "Body must have at least 2 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
