import React from "react";
import Logo from "../components/Logo";
import { storiesOf } from "@storybook/react";

storiesOf("Logo", module).add("Logo", () => {
  return <Logo />;
});
