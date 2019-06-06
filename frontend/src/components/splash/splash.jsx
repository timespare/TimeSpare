import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import NavBarButton from "../NavBarButton";
import Modal from "../Modal";
import SignupFormContainer from "../session_form/signup_form_container";
import LoginFormContainer from "../session_form/login_form_container";
import { connect } from "react-redux";
import { logout } from "../../actions/user_actions";
import "./Splash.css";

const mapStateToProps = state => ({
    currentUser: state.session.user
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

class Splash extends React.Component {
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
            
            <div className="splash">
                <div className="slide1"></div>
                <div className="slide2"></div>
                <div className="slide3"></div>
                <div className="slide4"></div>
                <div className="splash-box">
                    <h1 className="splash-tagline">Share your talents with the world.</h1>
                    <br />
                    <h3 className="splash-description">Join the TimeSpare community, home to millions of opportunities.</h3>
                    <br />
                    <Link to="/home" className="explore">Explore Listings</Link>
                </div>
            </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);
