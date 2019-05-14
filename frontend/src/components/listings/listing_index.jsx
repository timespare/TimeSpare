import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component {
  componentDidMount() {
    if (this.props.isHome) {
      this.props.getAllListings();
    } else {
      this.props.getCurrentUserListings();
    }
  }

  renderButton(isHome, listing) {
    if (!isHome) {
      return (
        <>
<<<<<<< HEAD
          <h1>GG</h1>
          <button onClick={listing => this.props.editListing(listing)}>
            Edit
          </button>
          <button onClick={listing => this.props.deleteListing(listing._id)}>
=======
          <NavBarButton
            label="Edit Listing"
            onClick={() =>
              this.setState({ modalisOpen: true, formType: "Edit Listing" })
            }
            noBackground={true}
          />
          <Modal
            open={this.state.modalisOpen}
            formType={this.state.formType}
            onClose={onClose}
          >
            {this.state.formType === "Edit Listing" && <EditListingContainer />}
          </Modal>
          <button onClick={() => this.props.deleteListing(listing._id)}>
>>>>>>> 189044f800591f6fb10353b099a5c4256219fc1e
            Delete
          </button>
        </>
      );
    }
  }

  render() {
    let listings = this.props.listings.map(listing => {
      return (
        <div>
          <ListingIndexItem key={listing._id} listing={listing} />
          {this.renderButton(this.props.isHome, listing)}
        </div>
      );
    });
    return <div className="listing-index-container">{listings}</div>;
  }
}
export default ListingIndex;
