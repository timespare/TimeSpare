import React from "react";
import Logo from "./Logo";

const Bar = props => {
  const style = {
    height: "92px",
    display: "flex"
  };
  return (
    <header className="bar-container" style={style}>
      <Logo />

      {props.children}
    </header>
  );
};

export default Bar;
