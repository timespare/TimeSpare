import React from "react";
import NavBarButton from "./NavBarButton";
import NavBar from "./NavBar";
import { logout } from "../actions/user_actions";
import Modal from "./Modal";
import CreateListingContainer from "./ListingForm/CreateListingContainer";
import EditListingContainer from "./ListingForm/EditListingContainer";
import { connect } from "react-redux";
import ListingIndexContainer from "./listings/listing_index_container";
import "./Home.css";
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
      <div className="home-container">
        <div className="navbar-container">
          <NavBar>
            <NavBarButton
              label="Create Listing"
              onClick={() =>
                this.setState({ modalisOpen: true, formType: "Create Listing" })
              }
              noBackground={true}
            />
            <NavBarButton
              label="Edit Listing"
              onClick={() =>
                this.setState({ modalisOpen: true, formType: "Edit Listing" })
              }
              noBackground={true}
            />
            <NavBarButton
              label="Log Out"
              onClick={this.props.logout}
              link="/"
              noBackground={true}
            />
          </NavBar>
        </div>
        <Modal
          open={this.state.modalisOpen}
          formType={this.state.formType}
          onClose={onClose}
        >
          {this.state.formType === "Create Listing" && (
            <CreateListingContainer />
          )}
        </Modal>

        <div className="home-page-content">
          <div className="home-page-left" />
          <div className="home-page-middle">
            <ListingIndexContainer isHome={false} />
          </div>
          <div className="home-page-right" />
        </div>
      </div>
    );
  }

  //   <h1>abd</h1>;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
