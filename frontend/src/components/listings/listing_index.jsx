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
<<<<<<< HEAD
          <ListingIndexItem key={listing._id} listing={listing} isHome={this.props.isHome} />
=======
          <ListingIndexItem key={listing._id} listing={listing} isHome={this.props.isHome}/>
>>>>>>> 5e33f8c328f231bf8f964c9e3b8235583660b183
          {/* <div className="index-button">
            {this.renderButton(this.props.isHome, listing)}
          </div> */}
        </div>
      );
    });
    return <div className="listing-index-container">{listings}</div>;
  }
}
export default ListingIndex;
