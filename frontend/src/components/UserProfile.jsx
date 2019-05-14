import React from "react";
import NavBarButton from "./NavBarButton";
import NavBar from "./NavBar";
import { logout } from "../actions/user_actions";
import Modal from "./Modal";
import CreateListingContainer from "./ListingForm/CreateListingContainer";
import EditListingContainer from "./ListingForm/EditListingContainer";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  currentUser: state.session.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

class UserProfile extends React.Component {
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
    return (
      <>
        <NavBar>
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
          <NavBarButton label="Log Out" onClick={this.props.logout} />
        </NavBar>

        <Modal
          open={this.state.modalisOpen}
          formType={this.state.formType}
          onClose={onClose}
        >
          {this.state.formType === "Create Listing" && (
            <CreateListingContainer />
          )}
          {this.state.formType === "Edit Listing" && <EditListingContainer />}
        </Modal>
      </>
    );
  }

  //   <h1>abd</h1>;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
