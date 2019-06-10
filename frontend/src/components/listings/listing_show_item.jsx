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
  let bookingButton = props.allowBooking ? (
    <button
      className="listing-book-button"
      onClick={() =>
        props.createBooking(props.listing).then(() => alert("booked!"))
      }
    >
      Book
    </button>
  ) : null;
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
          <p>
            <b>{props.listing.title}</b>
          </p>
          <p>{props.listing.description}</p>
        </div>
      </div>
      <div className="listing-show-bottom">
        <div className="listing-show-time">
          <p>
            {startTime.date} {startTime.time}
          </p>
          <p> to </p>
          <p>
            {endTime.date} {endTime.time}
          </p>
        </div>
        <div className="listing-book-button-div">{bookingButton}</div>
      </div>
    </div>
  );
};

export default listingShowItem;
