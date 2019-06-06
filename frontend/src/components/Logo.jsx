import React from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link } from "react-router-dom";
>>>>>>> master

const Logo = () => {
  const logoStyle = {
    opacity: "0.9",
    fontFamily: "Montserrat",
    fontSize: "35px",
    fontWeight: "bold",
    textalign: "center",
    color: "#ff5661",
    flexGrow: "1",
<<<<<<< HEAD
    textDecorationLine: "none"
  };
  return <Link style={logoStyle} to="/">TimeSpare</Link>;
=======
    margin: "0",
    textDecoration: 'none'
  };
  return <Link to="/" style={logoStyle}>TimeSpare</Link>;
>>>>>>> master
};

export default Logo;
