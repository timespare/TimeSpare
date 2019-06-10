import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createBooking } from "../../actions/booking_actions";
import ListingShowItem from "./listing_show_item";
const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

class ListingItemsCollection extends React.Component {
  render() {
    let listings = this.props.listings;
    let currentUser = this.props.currentUser;
    let allowBooking =
      currentUser && currentUser.id !== this.props.match.params.userId
        ? true
        : false;
    let collectionStyle = {
      display: "center"
    };
    let collection = listings.map(l => (
      <ListingShowItem
        listing={l}
        key={l._id}
        allowBooking={allowBooking}
        createBooking={this.props.createBooking}
      />
    ));
    return <div style={collectionStyle}>{collection}</div>;
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListingItemsCollection)
);
