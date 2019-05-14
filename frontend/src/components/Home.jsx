import React from "react";
import NavBar from "./NavBar";
import NavBarButton from "./NavBarButton";
import Modal from "./Modal";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import CreateListingContainer from "./ListingForm/CreateListingContainer";
import EditListingContainer from "./ListingForm/EditListingContainer";
import { logout } from "../actions/user_actions";
import { connect } from "react-redux";
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

  render() {
    const onClose = () => {
      this.setState({ modalisOpen: false, formType: "" });
    };

    const onSwitch = formType => {
      this.setState({ formType: formType });
    };
    return (
      <>
        <NavBar>
          {!!this.props.currentUser || (
            <NavBarButton
              label="Sign In"
              noBackground="true"
              onClick={() =>
                this.setState({ modalisOpen: true, formType: "Sign In" })
              }
            />
          )}
          {!!this.props.currentUser || (
            <NavBarButton
              label="Sign Up"
              onClick={() =>
                this.setState({ modalisOpen: true, formType: "Sign Up" })
              }
            />
          )}
          {this.props.currentUser && (
            <NavBarButton label="Sign Out" onClick={this.props.logout} />
          )}

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
              <SignupFormContainer onSwitchButtonClick={onSwitch} />
            )}
            {this.state.formType === "Create Listing" && (
              <CreateListingContainer />
            )}
            {this.state.formType === "Edit Listing" && <EditListingContainer />}
          </Modal>
        </NavBar>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
