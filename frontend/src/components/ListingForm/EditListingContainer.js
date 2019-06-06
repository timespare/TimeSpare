import ListingForm from "./ListingForm";
import {
  removeListingErrors,
  receiveAListing,
  receiveListingErrors
} from "../../actions/listing_actions";
import { editListing } from "../../util/listing_api_util";
import { connect } from "react-redux";
// import {}

const mapStateToProps = (state, ownProps) => ({
  listing: ownProps.listing,
  errors: state.errors.listings,
  formType: "Edit Listing"
});

const mapDispatchToProps = dispatch => ({
  receiveAListing: listing => dispatch(receiveAListing(listing.data)),
  receiveListingErrors: errors =>
    dispatch(receiveListingErrors(errors.response.data)),
  action: listing => editListing(listing),
  removeErrors: () => dispatch(removeListingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
