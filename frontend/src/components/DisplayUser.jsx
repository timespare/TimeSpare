// This is the profile page of another user.

import React from "react";
import { connect } from "react-redux";
import "./DisplayUser.css";

import NavBar from "./NavBar";
import NavBarButton from "./NavBarButton";
import SubmitButton from "./SubmitButton";
import { rateUser, fetchAnotherUser, logout } from "../actions/user_actions";
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
    logout: () => dispatch(logout())
  };
};

class DisplayedUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }
  componentWillMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserListings(userId);
    this.props.fetchAnotherUser(userId);
  }
  handleSubmit(e) {
    e.preventDefault();
    debugger;
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
    let navBar = currentUser ? (
      <NavBar>
        <NavBarButton
          label="Log Out"
          onClick={logout}
          link="/"
          noBackground={true}
        />
      </NavBar>
    ) : (
      <NavBar>
        <NavBarButton
          label="need to be fixed login button"
          noBackground={false}
        />
      </NavBar>
    );

    return (
      <div className="du-container">
        {navBar}
        <div className="du-contents">
          <div className="greeting-msg">
            Hello, you are visiting {displayedUser.username}'s proifle page.
          </div>
          <div className="user-rating-container">
            <div className="user-rating-show">{displayedUser.rating}</div>
            <div className="user-rating-form-container">
              rate the user:
              <form className="user-rating-form">
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  onChange={this.handleRateChange}
                />
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={this.handleRateChange}
                />
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  onChange={this.handleRateChange}
                />
                <SubmitButton
                  onClick={this.handleSubmit}
                  link={`/users/${displayedUser._id}`}
                  label="Submit score"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayedUser);
