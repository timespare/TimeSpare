import React from "react";
import DatePicker from "react-datetime";

import "./DateTime.css";
const DateTime = ({ onChange }) => {
  return <DatePicker onChange={onChange} />;
};

export default DateTime;
