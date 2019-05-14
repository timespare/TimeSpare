import React from "react";
import ListingIndexItem from "./listing_index_item";
import Modal from "../Modal";
import EditListingContainer from "../ListingForm/EditListingContainer";
import NavBarButton from "../NavBarButton";

class ListingIndex extends React.Component {
  componentDidMount() {
    if (this.props.isHome) {
      this.props.getAllListings();
    } else {
      this.props.getCurrentUserListings();
    }
  }
  
  renderButton(isHome, listing) {
    const onClose = () => {
      this.setState({ modalisOpen: false, formType: "" });
    };

    if (!isHome) {
      return (
        <>
          <NavBarButton
            label="Edit Listing"
            onClick={() =>
              this.setState({ modalisOpen: true, formType: "Edit Listing" })
            }
            noBackground={true}
          />
          <Modal
            open={this.state.modalisOpen}
            formType={this.state.formType}
            onClose={onClose}
          >
            {this.state.formType === "Edit Listing" && <EditListingContainer />}
          </Modal>
          <button onClick={() => this.props.deleteListing(listing._id)}>
            Delete
          </button>
        </>
      );
    }
  }

  render() {
    let listings = this.props.listings.map(listing => {
      return (
        <div className="listing-index-box">
          <ListingIndexItem key={listing._id} listing={listing} />
          {/* <div className="index-button">
            {this.renderButton(this.props.isHome, listing)}
          </div> */}
        </div>
      );
    });
    return <div className="listing-index-container">{listings}</div>;
  }
}
export default ListingIndex;
