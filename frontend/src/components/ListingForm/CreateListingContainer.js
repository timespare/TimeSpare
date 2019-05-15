import ListingForm from "./ListingForm";
import {
  removeListingErrors,
  receiveAListing,
  receiveListingErrors
} from "../../actions/listing_actions";
import { connect } from "react-redux";
import { addListing } from "../../util/listing_api_util";
// import {}

const mapStateToProps = state => {
  const listing = {
    title: "",
    description: "",
    begin: "",
    end: "",
    price: ""
  };
  return {
    listing: listing,
    errors: state.errors.listings,
    formType: "Create Listing"
  };
};

const mapDispatchToProps = dispatch => ({
  action: listing => addListing(listing),
  removeErrors: () => dispatch(removeListingErrors()),
  receiveAListing: listing => dispatch(receiveAListing(listing.data)),
  receiveListingErrors: errors =>
    dispatch(receiveListingErrors(errors.response.data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
