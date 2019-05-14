import React from "react";
// import Input from "./Input";

const Feild = ({ label, children }) => {
  return (
    <div style={fieldContainer}>
      <div style={fieldLeft}>
        <label>{label}</label>
      </div>
      <div style={fieldRight}>{children}</div>
    </div>
  );
};

const fieldContainer = {
  display: "flex",
  marginTop: "20px"
};

const fieldLeft = {
  width: "100px",
  marginRight: "30px",
  font: "14px",
  fontWeight: "bold"
};

const fieldRight = {
  flexGrow: "1",
  minWidth: "300px",
  lineHeight: "30px"
};

export default Feild;
