import React from "react";
import ListingIndexItem from "./listing_index_item";
import SearchBar from "../searchBar";
import NavBarButton from "../NavBarButton";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      keyword: this.props.keyword,
      isAll: true
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisplayByTags = this.handleDisplayByTags.bind(this);
  }
  componentDidMount() {
    if (this.props.isHome) {
      this.props.getAllListings();
    } else {
      this.props.getCurrentUserListings();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      listings: nextProps.listings,
      isAll: true
    })
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
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.getSearchedListings(this.state.keyword);
    }
  }

  handleDisplayByTags(e) {
    const tag = e.currentTarget.innerText;
    let arr = [];

    if (tag === "all") {
      arr = this.props.listings;
    } else {
      for (let i = 0; i < this.props.listings.length; i++) {
        const listing = this.props.listings[i];
        if (listing.tags.includes(tag)) arr.push(listing);
      }   
    }

    this.setState({
      listings: arr
    })
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
    
        <NavBarButton label="all" onClick={this.handleDisplayByTags}/>
        <NavBarButton label="math" onClick={this.handleDisplayByTags}/>
        <NavBarButton label="physics" onClick={this.handleDisplayByTags}/>
        <NavBarButton label="english" onClick={this.handleDisplayByTags}/>
        <NavBarButton label="chemistry" onClick={this.handleDisplayByTags}/>
        <NavBarButton label="biology" onClick={this.handleDisplayByTags}/>

        <div style={gridContainer}>
          {this.state.listings.map((listing, i) => {
            return (
              // <div className="listing-index-box" key={i}>
              <div style={gridItem} key={i}>
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
