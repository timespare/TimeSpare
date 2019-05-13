import ListingForm from "./ListingForm";
import {
  editListing,
  removeListingErrors
} from "../../actions/listing_actions";
import { connect } from "react-redux";
// import {}

const mapStateToProps = state => ({
  errors: state.errors.listings,
  formType: "Edit Listing"
});

const mapDispatchToProps = dispatch => ({
  action: listing => dispatch(editListing(listing)),
  removeErrors: () => dispatch(removeListingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
