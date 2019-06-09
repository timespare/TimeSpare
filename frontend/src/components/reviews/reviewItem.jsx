import React from "react";
import "./reviewItem.css";
export default function ReviewItem({ review }) {
  return (
    <div className="review-item-container">
      <div className="review-item-left">
        <div>{review.author.username}</div>
      </div>

      <div className="review-item-right">
        <div>
          <b>Title: </b>
          {review.title}
        </div>
        <div>
          <b>Comments: </b>
          {review.body}
        </div>
      </div>
    </div>
  );
}
