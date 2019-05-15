import React from "react";
import "../listings/listing_index_item.css";

function formatDate(input) {
  let year = input.substring(0, 4);
  let month = input.substring(5, 7);
  let day = input.substring(8, 10);
  let time = input.substring(11, 16);

  return { date: year + "/" + month + "/" + day, time: time };
}

const BookingIndexItem = ({ listing }) => {
  if (!listing) {
    return null;
  }

  return (
    <div className="listing-item-outer-container">
      <div className="listing-item-header">
        <span>{listing.title}</span>
      </div>
      <div className="listing-item-middle-layer">
        <div className="listing-item-middle-left">
          {/* <Link to="">{listing.creatorImgUrl}</Link> */}
          {/* Profile Picture */}
          {/* <p className="emoji">🤓</p> */}
        </div>
        <div className="listing-item-middle-right">
          {/* <span>{listing.username}</span> */}
          <span>{listing.user.username}</span>
          <span>
            <b>Start</b>: {formatDate(listing.begin).date} @{" "}
            {formatDate(listing.begin).time}
          </span>
          {/* <br></br> */}
          <span>
            <b>End</b>: {formatDate(listing.end).date} @{" "}
            {formatDate(listing.end).time}
          </span>
          <span>
            <b>Price</b>: ${listing.price}
          </span>
        </div>
      </div>
      <div className="listing-item-lower-layer">
        <span>{listing.description}</span>
      </div>
    </div>
  );
};

export default BookingIndexItem;
