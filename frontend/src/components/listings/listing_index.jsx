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

<<<<<<< HEAD
    render() {
        let listings = this.props.listings.map(listing => {
            return (
                <ListingIndexItem
                    key={listing.id}
                    listing={listing}
                />
            )
        });
        return (
            <div className="listing-index-container">
                {listings}
                {/* <br></br> */}
            </div>
        );
=======
  renderButton(isHome, listing) {
    if (!isHome) {
      return (
        <>
          <button onClick={listing => this.props.editListing(listing)}>
            Edit
          </button>
          <button onClick={listing => this.props.deleteListing(listing._id)}>
            Delete
          </button>
        </>
      );
>>>>>>> master
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
