import React from "react";
import ListingIndexItem from "./listing_index_item";
import SearchBar from "../searchBar";
class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listhings: this.props.listings,
      keyword: this.props.keyword
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.isHome) {
      this.props.getAllListings();
    } else {
      this.props.getCurrentUserListings();
    }
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
        keyword: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    console.log("keyword on listing index", this.state.keyword);
    if (e.keyCode == 13) {
      e.preventDefault();
      this.props.getSearchedListings(this.state.keyword);
    }
  }

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
        <SearchBar
          onChange={this.handleInput("keyword")}
          onSubmit={this.handleSubmit}
          keyword={this.state.keyword}
        />
        {listings}
      </div>
    );
  }
}
export default ListingIndex;
