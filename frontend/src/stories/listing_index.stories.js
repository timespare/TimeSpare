import React from "react";

import ListingIndex from "../components/listings/listing_index";
import { getCurrentUserListings } from "../util/listing_api_util";
import { storiesOf } from "@storybook/react";

storiesOf("listing_index", module).add("listing_index", () => (
  <ListingIndex getCurrentUserListings={getCurrentUserListings()} />
));
