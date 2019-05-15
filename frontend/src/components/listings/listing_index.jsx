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

  render() {
    let listings = this.props.listings.map(listing => {
      return (
        <div className="listing-index-box">
          <ListingIndexItem 
          key={listing._id} 
          listing={listing} 
          isHome={this.props.isHome} 
          deleteListing={this.props.deleteListing}
          />
        </div>
      );
    });
    return <div className="listing-index-container">{listings}</div>;
  }
}
export default ListingIndex;
