import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createReview } from "../../actions/review_actions";
import SubmitButton from "../SubmitButton";
import "./reviewForm.css";
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    review["ownerId"] = this.props.match.params.userId;

    this.props.createReview(review);
    //TODO: error handler is missing....
  }

  render() {
    return (
      <form className="review-form">
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleInput("title")}
          placeholder="title"
          id="review-title-input"
        />
        <textarea
          rows="15"
          //   cols="40"
          placeholder="write your review here!"
          value={this.state.body}
          onChange={this.handleInput("body")}
          id="review-body-input"
        />
        {/* <button  onClick={this.handleSubmit}>
          submit
        </button> */}
        <div id="review-button">
          <SubmitButton
            onClick={this.handleSubmit}
            noBackground="false"
            label="submit"
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ReviewForm)
);
