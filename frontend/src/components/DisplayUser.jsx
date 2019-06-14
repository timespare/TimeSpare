// This is the profile page of another user.

import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./DisplayUser.css";

import NavBar from "./NavBar";
import NavBarButton from "./NavBarButton";
import SubmitButton from "./SubmitButton";
import Modal from "./Modal";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import CreateListingContainer from "./ListingForm/CreateListingContainer";

import ReviewForm from "./reviews/reviewForm";
import ReviewCollection from "./reviews/reviewCollection";
import ListingItemsCollection from "./listings/listing_items_collection";
import { rateUser, fetchAnotherUser, logout } from "../actions/user_actions";
import { getUserReviews, createReview } from "../actions/review_actions";
import { getAnotherUserListings } from "../actions/listing_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    listings: state.entities.listings,
    displayedUser: state.entities.userDisplayed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    rateUser: userRating => dispatch(rateUser(userRating)),
    getUserListings: userId => dispatch(getAnotherUserListings(userId)),
    fetchAnotherUser: userId => dispatch(fetchAnotherUser(userId)),
    getUserReviews: userId => dispatch(getUserReviews(userId)),
    createReview: review => dispatch(createReview(review)),
    logout: () => dispatch(logout())
  };
};

class DisplayedUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      modalisOpen: false,
      formType: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }
  componentWillMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserListings(userId);
    this.props.fetchAnotherUser(userId);
    this.props.getUserReviews(userId);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.rateUser({
      id: this.props.displayedUser._id,
      rating: parseInt(this.state.rating)
    });
  }
  handleRateChange(e) {
    this.setState({ rating: e.currentTarget.value });
  }

  render() {
    // TODO: render corresponding navBar, fix login logout buttons
    let { currentUser, listings, displayedUser, logout } = this.props;
    let navBar;
    const onClose = () => {
      this.setState({ modalisOpen: false, formType: "" });
    };

    const onSwitch = formType => {
      this.setState({ formType: formType });
    };
    if (currentUser) {
      navBar = (
        <NavBar>
          <NavBarButton label="My Profile" link="/profile" />
          <NavBarButton
            label="Log Out"
            onClick={logout}
            link="/"
            noBackground={true}
          />
        </NavBar>
      );
    } else {
      navBar = (
        <>
          <NavBar>
            <NavBarButton
              label="Sign In"
              noBackground="true"
              onClick={() =>
                this.setState({ modalisOpen: true, formType: "Sign In" })
              }
            />
            <NavBarButton
              label="Sign Up"
              onClick={() =>
                this.setState({ modalisOpen: true, formType: "Sign Up" })
              }
            />
          </NavBar>

          <Modal
            open={this.state.modalisOpen}
            formType={this.state.formType}
            onClose={onClose}
          >
            {this.state.formType === "Sign In" && (
              <LoginFormContainer
                onSwitchButtonClick={onSwitch}
                onClose={onClose}
              />
            )}
            {this.state.formType === "Sign Up" && (
              <SignupFormContainer
                onSwitchButtonClick={onSwitch}
                onClose={onClose}
              />
            )}
          </Modal>
        </>
      );
    }

    let ratingForm = (
      <form className="user-rating-form">
        <fieldset className="rating">
          <input
            type="radio"
            name="rating"
            value="5"
            id="star5"
            onChange={this.handleRateChange}
          />
          <label htmlFor="star5" />
          <input
            type="radio"
            name="rating"
            value="4"
            id="star4"
            onChange={this.handleRateChange}
          />
          <label htmlFor="star4" />
          <input
            type="radio"
            name="rating"
            value="3"
            id="star3"
            onChange={this.handleRateChange}
          />
          <label htmlFor="star3" />
          <input
            type="radio"
            name="rating"
            value="2"
            id="star2"
            onChange={this.handleRateChange}
          />
          <label htmlFor="star2" />
          <input
            type="radio"
            name="rating"
            value="1"
            id="star1"
            onChange={this.handleRateChange}
          />
          <label htmlFor="star1" />
        </fieldset>
        {/* <SubmitButton
          onClick={this.handleSubmit}
          link={`/users/${displayedUser._id}`}
          label="Submit score"
        /> */}
        <Link
          to={`/users/${displayedUser._id}`}
          onClick={this.handleSubmit}
          className="rating-submit"
          title="Rate"
        >
          &#10148;
          {/* &#10172; */}
        </Link>
      </form>
    );

    const usernameStyle = {
      fontSize: "30px",
      fontWeight: "600"
    };
    const backgroundStyle = {
      border: "1px solid rgb(242, 239, 239)",
      borderRadius: "3px",
      background: "rgb(242, 239, 239)",
      margin: "20px 0",
      padding: "5px",
      boxSizing: "border-box"
    };

    const reviewStyle = {
      display: "center",
      textAlign: "center",
      paddingTop: "10px",
      fontSize: "30px",
      fontWeight: "600"
    };

    const reviewerImageStyle = {
      width: "100px",
      height: "100px",
      border: "3px solid pink",
      borderRadius: "50%",
      left: "35px",
      top: "50px",
      position: "absolute"
    };

    const currentUserNameStyle = {
      position: "absolute",
      left: "50px",
      top: "160px"
    };

    return (
      <div className="du-container">
        {navBar}
        <div className="du-contents">
          <div className="du-contents-top">
            <div className="du-contents-top-left">
              <div className="greeting-msg" style={usernameStyle}>
                {displayedUser.username}
              </div>
              <img src="proficon.jpg" id="user-avatar" />
              <div className="user-rating-container">
                <div className="user-rating-form-container">{ratingForm}</div>
              </div>
            </div>
            <div className="du-contents-top-right">
              <div className="user-background">
                <b>About Me: </b>
                <p style={backgroundStyle}>
                  My teaching background is quite broad, for I have taught
                  adults in four different countries and three different
                  subjects. It began during my first degree (French and music)
                  which included a year’s work teaching English in France. This
                  was in a lycée and classes préparatoires, so the students were
                  aged from 14 to 24. It principally involved conversation
                  classes in groups of varying sizes, although with the older
                  students (who were studying the extra years required for entry
                  into France’s elite universities) it also included more formal
                  large-group seminars.
                </p>
              </div>
              <div className="user-rating-show">
                My rating: {displayedUser.rating}
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-picture">
              <img
                src="proficon.jpg"
                alt="my-avatar"
                style={reviewerImageStyle}
              />
              <div style={currentUserNameStyle}>{currentUser.username}</div>
            </div>
            <div className="review-form-container">
              <div style={reviewStyle}>Leave a review!</div>
              <ReviewForm />
            </div>
          </div>

          <div className="review-collection-container">
            <ReviewCollection />
          </div>
          <div>
            <p>
              <b>My Listings...</b>
            </p>
          </div>
          <div className="user-listing-container">
            <ListingItemsCollection />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayedUser)
);
