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
    let year = input.substring(0, 4);
    let month = input.substring(5, 7);
    let day = input.substring(8, 10);
    let time = input.substring(11, 16);

    return { date: year + "/" + month + "/" + day, time: time };
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
    // debugger
    return (
      <div className="listing-item-outer-container">
        {/* <div className="listing-item-inner-container"> */}
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
            <span>
              <Link to={`/users/${listing.user._id}`}>
                {listing.user.username}
              </Link>
            </span>
            <span>
              <b>Start</b>: {this.formatDate(listing.begin).date} @{" "}
              {this.formatDate(listing.begin).time}
            </span>
            {/* <br></br> */}
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
    );
  }
}

export default ListingIndexItem;
