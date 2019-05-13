import ListingForm from "./ListingForm";
import {
  createListing,
  removeListingErrors
} from "../../actions/listing_actions";
import { connect } from "react-redux";
// import {}

const mapStateToProps = state => ({
  errors: state.errors.listings,
  formType: "Create Listing"
});

const mapDispatchToProps = dispatch => ({
  action: listing => dispatch(createListing(listing)),
  removeErrors: () => dispatch(removeListingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
