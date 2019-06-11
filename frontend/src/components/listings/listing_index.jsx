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
    if (e.keyCode == 13) {
      e.preventDefault();
      this.props.getSearchedListings(this.state.keyword);
    }
  }

  render() {
    const gridContainer = {
      marginLeft: "auto",
      marginRight: "auto",
      display: "grid",
      gridColumnGap: "60px",
      gridTemplateColumns: "400px 400px 400px",
      // backgroundColor: "#2196F3",
      padding: "10px"
    };

    const gridItem = {
      // backgroundColor: "rgba(255, 255, 255, 0.8)",
      // border: "1px solid rgba(0, 0, 0, 0.8)",
      padding: "20px",
      // fontSize: "30px",
      display: "flex",
      justifyContent: "center"

      // textAlign: "center"
    };
    if (!this.props.listings && this.props.isHome) {
      return (
        <SearchBar
          onChange={this.handleInput("keyword")}
          onSubmit={this.handleSubmit}
          keyword={this.state.keyword}
        />
      );
    } else if (!this.props.listings && !this.props.isHome) {
      return <div />;
    }
    return (
      <>
        <SearchBar
          onChange={this.handleInput("keyword")}
          onSubmit={this.handleSubmit}
          keyword={this.state.keyword}
        />
        <div style={gridContainer}>
          {this.props.listings.map((listing, i) => {
            return (
              // <div className="listing-index-box" key={i}>
              <div style={gridItem}>
                <ListingIndexItem
                  listing={listing}
                  isHome={this.props.isHome}
                  deleteListing={this.props.deleteListing}
                  createBooking={this.props.createBooking}
                />
              </div>
            );
          })}
        </div>
      </>
    );
    // if (this.props.isHome) {
    //   return (
    //     <div className="listing-index-container">
    //       <SearchBar
    //         onChange={this.handleInput("keyword")}
    //         onSubmit={this.handleSubmit}
    //         keyword={this.state.keyword}
    //       />
    //       {listings}
    //     </div>
    //   );
    // } else {
    //   return <div className="listing-index-container">{listings}</div>;
    // }
  }
}
export default ListingIndex;
