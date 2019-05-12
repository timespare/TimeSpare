import React from "react";
import NavBarButton from "../components/NavBarButton";
import { storiesOf } from "@storybook/react";

storiesOf("NavBarButton", module)
  .add("NavBarButton-colored-background", () => {
    return <NavBarButton label="Log in" />;
  })
  .add("NavBarButton - transparent - background", () => {
    return <NavBarButton label="Log in" noBackground={true} />;
  });
