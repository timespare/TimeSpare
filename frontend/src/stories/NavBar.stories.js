import React from "react";
import NavBar from "../components/NavBar";
import { storiesOf } from "@storybook/react";

storiesOf("NavBar", module).add("NavBar", () => {
  return <NavBar />;
});
