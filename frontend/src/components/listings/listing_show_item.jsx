import React from "react";
import "./listing_show_item.css";
function formatDate(input) {
  let year = input.substring(0, 4);
  let month = input.substring(5, 7);
  let day = input.substring(8, 10);
  let time = input.substring(11, 16);

  return { date: year + "/" + month + "/" + day, time: time };
}

const listingShowItem = props => {
  let startTime = formatDate(props.listing.begin);
  let endTime = formatDate(props.listing.end);
  return (
    <div className="listing-show-container">
      <div className="listing-show-middle">
        <div className="listing-show-left">
          <div className="listing-show-img">
            <img src="proficon.jpg" />
          </div>
          <p>price: ${props.listing.price}</p>
        </div>
        <div className="listing-show-right">
          <p>{props.listing.description}</p>
        </div>
      </div>
      <div className="listing-show-bottom">
        <div className="listing-show-time">
          <p>{startTime.date}</p>
          <p>{startTime.time}</p>
        </div>
        <div className="listing-show-to"> to </div>
        <div className="listing-show-time">
          <p>{endTime.date}</p>
          <p>{endTime.time}</p>
        </div>
      </div>
    </div>
  );
};

export default listingShowItem;
