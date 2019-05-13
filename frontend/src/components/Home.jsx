import React from "react";
import NavBar from "./NavBar";
import NavBarButton from "./NavBarButton";
import Modal from "./Modal";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import CreateListingContainer from "./ListingForm/CreateListingContainer";
import EditListingContainer from "./ListingForm/EditListingContainer";
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
          <NavBarButton
            label="Create Listing"
            onClick={() =>
              this.setState({ modalisOpen: true, formType: "Create Listing" })
            }
          />
          <NavBarButton
            label="Edit Listing"
            onClick={() =>
              this.setState({ modalisOpen: true, formType: "Edit Listing" })
            }
          />

          <Modal
            open={this.state.modalisOpen}
            formType={this.state.formType}
            onClose={onClose}
          >
            {this.state.formType === "Sign In" && (
              <LoginFormContainer onSwitchButtonClick={onSwitch} />
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

export default Home;
