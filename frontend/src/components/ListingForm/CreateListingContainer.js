import ListingForm from "./ListingForm";
import {
  createListing,
  removeListingErrors
} from "../../actions/listing_actions";
import { connect } from "react-redux";
// import {}

const mapStateToProps = state => {
  const listing = {
    title: "",
    description: "",
    begin: "",
    end: "",
    price: ""
  }
  return {
    listing: listing,
    errors: state.errors.listings,
    formType: "Create Listing"
  }
}


const mapDispatchToProps = dispatch => ({
  action: listing => dispatch(createListing(listing)),
  removeErrors: () => dispatch(removeListingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
