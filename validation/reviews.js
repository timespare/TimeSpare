const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";
  data.title = validText(data.title) ? data.title : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Review must have title";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Review must have body";
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
