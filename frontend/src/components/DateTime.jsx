import React from "react";
import DatePicker from "react-datetime";

import "./DateTime.css";
const DateTime = ({ value, onChange }) => {
  return <DatePicker select={value} onChange={onChange} placeholderText="Click to select a date"/>;
};

export default DateTime;
