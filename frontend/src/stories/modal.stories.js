import React from "react";
import Modal from "../components/Modal";
import { storiesOf } from "@storybook/react";

storiesOf("Modal", module).add("opened modal", () => {
  return <Modal open={true} />;
});
