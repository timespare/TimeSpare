import React from "react";
import { connect } from "react-redux";
import ReviewItem from "./reviewItem";
const mapStateToProps = state => ({
  reviews: state.entities.reviews
});

class ReviewCollection extends React.Component {
  render() {
    let reviews = this.props.reviews;
    let reviewArr = Object.values(reviews).map(review => (
      <ReviewItem review={review} key={review._id} />
    ));
    return <div className="all-reviews-container">{reviewArr}</div>;
  }
}

export default connect(mapStateToProps)(ReviewCollection);
