import React from 'react';
import './listing_index_item.css';
import { Link } from 'react-router-dom'

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  } 

  formatDate(input) {
    let year = input.substring(0, 4);
    let month = input.substring(5, 7);
    let day = input.substring(8, 10);
    let time = input.substring(11, 16);

    return { date: year + "/" + month + "/" + day, time: time };
  }

  renderButton(listing, isHome) {
    if (isHome) {
      return <h1>jin</h1>
    } else {
      return <h1>dope</h1>
    }
  }

  render() {
    const { listing, isHome } = this.props;

    return (
      <div className="listing-item-outer-container">
        {/* <div className="listing-item-inner-container"> */}
        <div className="listing-item-header">
          <span>{listing.title}</span>
        </div>
        <div className="listing-item-middle-layer">
          <div className="listing-item-middle-left">
            <Link to="">{listing.creatorImgUrl}</Link>
            {/* Profile Picture */}
          </div>
          <div className="listing-item-middle-right">
            {/* <span>{listing.username}</span> */}
            <span>Username</span>
            <span><b>Start</b>: {this.formatDate(listing.begin).date} @ {this.formatDate(listing.begin).time}</span>
            {/* <br></br> */}
            <span><b>End</b>: {this.formatDate(listing.end).date} @ {this.formatDate(listing.end).time}</span>
            <span><b>Price</b>: ${listing.price}</span>
          </div>
        </div>
        <div className="listing-item-lower-layer">
          <span>{listing.description}</span>
        </div>
        {this.renderButton(listing, isHome)}
      </div>)
  }
}

export default ListingIndexItem;