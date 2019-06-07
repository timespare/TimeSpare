import React from "react";
import ListingIndexItem from "./listing_index_item";
import SearchBar from "../searchBar";
class ListingIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listhings: this.props.listings,
  //     keyword: this.props.keyword
  //   };
  //   this.handleInput = this.handleInput.bind(this);
  // }
  componentDidMount() {
    if (this.props.isHome) {
      this.props.getAllListings();
    } else {
      this.props.getCurrentUserListings();
    }
  }

  // handleInput(field) {
  //   return e => {
  //     this.setState({ [field]: e.currentTarget.value });
  //   };
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const listing = Object.assign({}, this.state);
  //   this.props.action(listing).then(
  //     listing => {
  //       this.props.onClose();
  //       this.props.receiveAListing(listing);
  //     },
  //     err => {
  //       this.props.receiveListingErrors(err);
  //     }
  //   );
  // }

  render() {
    let listings = this.props.listings.map((listing, i) => {
      return (
        <div className="listing-index-box" key={i}>
          <ListingIndexItem
            listing={listing}
            isHome={this.props.isHome}
            deleteListing={this.props.deleteListing}
            createBooking={this.props.createBooking}
          />
        </div>
      );
    });
    return (
      <div className="listing-index-container">
        <SearchBar />
        {listings}
      </div>
    );
  }
}
export default ListingIndex;
