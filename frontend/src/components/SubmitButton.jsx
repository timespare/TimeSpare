import React from "react";
import { Link } from "react-router-dom";
// import "./NavBarButton.css";
const SubmitButton = props => {
  // pass in onClick actions,link
  const { onClick, link, label } = props;

  const SubmitButtonStyle = {
    background: "#ff5661",
    height: "60px",
    weight: "300px;",
    color: "white",
    textDecoration: "none",
    display: "inline - flex",
    justifyContent: "center",
    alignitems: "center",
    padding: " 0 10px 0 10px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontFamily: "Montserrat"
  };
  if (link) {
    return (
      <Link
        to={link}
        className={"SubmitButton"}
        onClick={onClick}
        style={SubmitButtonStyle}
      >
        {label}
      </Link>
    );
  } else {
    return (
      <a
        href="javascript:void 0"
        className={"nav-bar-button "}
        onClick={onClick}
        style={SubmitButtonStyle}
      >
        {label}
      </a>
    );
  }
};

export default SubmitButton;
