import React from "react";
import { connect } from "react-redux";
import BookingIndexItem from "./booking_index_item";

class BookingIndex extends React.Component {
  componentDidMount() {}
  render() {
    // if (this.props.bookings.length === 0) {
    //   return null;
    // }

    return (
      <div>
        {this.props.bookings.map((booking, i) => (
          <div key={i}>
            <BookingIndexItem listing={booking.listing} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookings: Object.values(state.entities.bookings)
  };
};

export default connect(mapStateToProps)(BookingIndex);
