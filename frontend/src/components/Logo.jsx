import React from "react";
import { Link } from 'react-router-dom'

const Logo = () => {
  const logoStyle = {
    opacity: "0.9",
    fontFamily: "Montserrat",
    fontSize: "35px",
    fontWeight: "bold",
    textalign: "center",
    color: "#ff5661",
    flexGrow: "1",
    textDecorationLine: "none"
  };
  return <Link style={logoStyle} to="/">TimeSpare</Link>;
};

export default Logo;
