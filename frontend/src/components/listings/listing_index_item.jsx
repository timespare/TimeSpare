import React from "react";
import "./listing_index_item.css";
import { Link } from "react-router-dom";
import NavBarButton from "../NavBarButton";
import Modal from "../Modal";
import EditListingContainer from "../ListingForm/EditListingContainer";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalisOpen: false,
      formType: ""
    };
  }

  formatDate(input) {
    // debugger
    // let year = input.substring(0, 4);
    // let month = input.substring(5, 7);
    // let day = input.substring(8, 10);
    // let time = input.substring(11, 16);
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    let date = new Date(input);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let d = date.getDate();
    let day = days[date.getDay()];
    let hr = date.getHours();
    let min = date.getMinutes();
    let ampm = "am";

    if (month < 10) {
      month = "0" + month;
    }

    if (d < 10) {
      d = "0" + d;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (hr > 12) {
      hr = hr - 12;
      ampm = "pm";
    }
    
    const time = hr + ": " + min + " " + ampm;

    return { date: day + " " + year + "/" + month + "/" + d, time: time };
  }

  renderButton(listing, isHome) {
    if (!isHome) {
      const onClose = () => {
        this.setState({ modalisOpen: false, formType: "" });
      };
      return (
        <>
          <NavBarButton
            label="Edit Listing"
            onClick={() =>
              this.setState({ modalisOpen: true, formType: "Edit Listing" })
            }
          />
          <NavBarButton
            label="Delete"
            onClick={() => this.props.deleteListing(listing._id)}
          />
          <Modal
            open={this.state.modalisOpen}
            formType={this.state.formType}
            onClose={onClose}
          >
            {this.state.formType === "Edit Listing" && (
              <EditListingContainer listing={listing} onClose={onClose} />
            )}
          </Modal>
        </>
      );
    } else {
      return (
        <div className="listing-item-button">
          <button
            onClick={() => this.props.createBooking({ listing: listing })}
            className="btn book"
          >
            Book Me!
          </button>
        </div>
      );
    }
  }

  render() {
    const { listing, isHome } = this.props;
    return (
      <div className="listing-item-outer-container">
        <div className="listing-item-inner-container">
          <div className="listing-item-header">
            <span>{listing.title}</span>
          </div>
          <div className="listing-item-middle-layer">
            <div className="listing-item-middle-left" />
            <div className="listing-item-middle-right">
              <div>
                <Link
                  to={`/users/${listing.user._id}`}
                  className="listing-item-username"
                >
                  {listing.user.username}
                </Link>
              </div>
              <span>
                <b>Start</b>: {this.formatDate(listing.begin).date} @{" "}
                {this.formatDate(listing.begin).time}
              </span>
              <span>
                <b>End</b>: {this.formatDate(listing.end).date} @{" "}
                {this.formatDate(listing.end).time}
              </span>
              <span>
                <b>Price</b>: ${listing.price}
              </span>
            </div>
          </div>
          <div className="listing-item-lower-layer">
            <span>{listing.description}</span>
          </div>
          <div className="listing-item-tags">
            <ul className="tags">
              {listing.tags.map((tag, i) => {
                return (
                  <li className="tag" key={i}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="listing-item-button">
            {this.renderButton(listing, isHome)}
          </div>
        </div>
      </div>
    );
  }
}

export default ListingIndexItem;
