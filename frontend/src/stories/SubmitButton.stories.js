import React from "react";
import SubmitButton from "../components/SubmitButton";
import { storiesOf } from "@storybook/react";

storiesOf("SubmitButton", module).add("SubmitButton", () => {
  return <SubmitButton label="Log in" />;
});
