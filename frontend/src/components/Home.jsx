import React from "react";
import NavBar from "./NavBar";
import NavBarButton from "./NavBarButton";
import Modal from "./Modal";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
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
        </Modal>
        {/* <NavBarButton label="Sign Out" OnClick={logout} /> */}
      </NavBar>
    );
  }
}

export default Home;
