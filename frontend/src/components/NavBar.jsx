import React from "react";
import Logo from "./Logo";

const Bar = props => {
  const style = {
    height: "92px",
    display: "flex",
    padding: "10px 10px 0 10px"
  };
  return (
    <header className="bar-container" style={style}>
      <Logo />

      {props.children}
    </header>
  );
};

export default Bar;
