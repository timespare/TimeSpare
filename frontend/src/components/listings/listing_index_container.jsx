import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import {
  getAllListings,
  getCurrentUserListings,
  deleteListing,
  receiveSearchedListings,
  getSearchedListings
} from "../../actions/listing_actions";
// import { fetchUsers } from '../../actions/user_actions';
import { createBooking } from "../../actions/booking_actions";

const mapStateToProps = state => {
  let listings = Object.values(state.entities.listings);
  return {
    listings: listings,
    keyword: ""
    // users: users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllListings: () => dispatch(getAllListings()),
    getSearchedListings: keyword => dispatch(getSearchedListings(keyword)),
    receiveSearchedListings: () => dispatch(receiveSearchedListings()),
    getCurrentUserListings: () => dispatch(getCurrentUserListings()),
    deleteListing: id => dispatch(deleteListing(id)),
    createBooking: booking => dispatch(createBooking(booking))
    // fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
