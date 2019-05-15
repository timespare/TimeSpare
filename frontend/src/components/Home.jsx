import React from "react";
import NavBar from "./NavBar";
import NavBarButton from "./NavBarButton";
import Modal from "./Modal";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import ListingIndexContainer from "./listings/listing_index_container";
import "./Home.css";
import { connect } from "react-redux";
import { logout } from "../actions/user_actions";

const mapStateToProps = state => ({
  currentUser: state.session.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalisOpen: false,
      formType: ""
    };
  }

  componentDidUpdate(prevProp) {
    if (this.props.currentUser && !prevProp.currentUser) {
      this.setState({ modalisOpen: false, formType: "" });
    }
  }
  render() {
    const onClose = () => {
      this.setState({ modalisOpen: false, formType: "" });
    };

    const onSwitch = formType => {
      this.setState({ formType: formType });
    };
    const currentUser = this.props.currentUser;
    return (
      <div className="home-container">
        <div className="navbar-container">
          <NavBar>
            {!!currentUser || (
              <NavBarButton
                label="Sign In"
                noBackground="true"
                onClick={() =>
                  this.setState({ modalisOpen: true, formType: "Sign In" })
                }
              />
            )}
            {!!currentUser || (
              <NavBarButton
                label="Sign Up"
                onClick={() =>
                  this.setState({ modalisOpen: true, formType: "Sign Up" })
                }
              />
            )}
            {currentUser && <NavBarButton label="My Profile" link="/profile" />}
            {currentUser && (
              <NavBarButton
                label="Log Out"
                onClick={this.props.logout}
                link="/"
                noBackground={true}
              />
            )}
          </NavBar>
        </div>
        <div className="home-page-content">
          <div className="home-page-left" />
          <div className="home-page-middle">
            <ListingIndexContainer isHome={true} />
          </div>

          <div className="home-page-right" />
        </div>

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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
