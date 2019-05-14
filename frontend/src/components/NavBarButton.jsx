import React from "react";
import { Link } from "react-router-dom";
import "./NavBarButton.css";
const NavBarButton = props => {
  const { onClick, link, label, noBackground } = props;
  let additionalClass = "";
  if (noBackground) {
    additionalClass = "nav-bar-button-transparent-background";
  }
  if (link) {
    return (
      <Link
        to={link}
        className={"nav-bar-button " + additionalClass}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  } else {
    return (
      <a
        href="javascript:void 0"
        className={"nav-bar-button " + additionalClass}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
};

export default NavBarButton;
