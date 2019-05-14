import Modal from "../Modal";
import ListingShowItem from "./listing_show_item";
import React from "react";
class ListingModal extends React.Component {
  render() {
    return (
      <Modal
        formType={this.props.listing.title}
        children={<ListingShowItem listing={this.props.listing} />}
        open={true}
      />
    );
  }
}

export default ListingModal;
