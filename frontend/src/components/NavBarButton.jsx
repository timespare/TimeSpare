import React from "react";
import { Link } from "react-router-dom";

const NavBarButton = props => {
  // pass in onClick actions,link
  const { onClick, link } = props;
  if (link) {
    return (
      <Link to={link} className="nav-bar-button" onClick={onClick}>
        {props.label}
      </Link>
    );
  } else {
    return (
      <a href="javascript:void 0" className="nav-bar-button" onClick={onClick}>
        {props.label}
      </a>
    );
  }
};

export default NavBarButton;
