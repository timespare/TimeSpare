import React from "react";
import SearchBar from "../components/searchBar";
import { storiesOf } from "@storybook/react";

storiesOf("SearchBar", module).add("SearchBar", () => {
  return <SearchBar />;
});
