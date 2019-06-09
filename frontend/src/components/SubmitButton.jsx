import React from "react";
import { Link } from "react-router-dom";
const SubmitButton = props => {
  const { onClick, link, label } = props;

  const SubmitButtonStyle = {
    background: "#ff5661",
    height: "60px",
    color: "white",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: " 0px 5px 0 5px",
    marginTop: "20px",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Montserrat"
  };
  if (link) {
    return (
      <Link to={link} onClick={onClick} style={SubmitButtonStyle}>
        {label}
      </Link>
    );
  } else {
    return (
      <a href="javascript:void 0" onClick={onClick} style={SubmitButtonStyle}>
        {label}
      </a>
    );
  }
};

export default SubmitButton;
