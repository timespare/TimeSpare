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
                <div className="splash-box">
                        <div className="slide1"></div>
                        <div className="slide2"></div>
                        <div className="slide3"></div>
                        <div className="slide4"></div>
                    <h1 className="splash-tagline">Share your talents with the world.</h1>
                    <br />
                        <h3 className="splash-description">Find unique experiences around you, and earn extra money
all on your free time.</h3>
                    <br />
                    <Link to="/home" className="explore">Explore Listings</Link>
                </div>
                
            </div>

            <div className="description">
                <div className="left">
                    <div className="left-title">
                        Introducing TimeSpare
                    </div>
                    <div className="left-description">

                        {/* Sometimes, you find yourself with some free-time. You’re tired of laying around in bed all Saturday, or waiting for your next customer as an Uber driver.
                        TimeSpare helps you fill those idle times with purposeful work by connecting you with locals around you who need your skills. 
                        <span>We believe that good things happen when people help each other, whether across town or towards their dreams. Opportunities appear, open up, and become reality.</span>
                         */}
                            <p>Sometimes, you find yourself with some free-time. You’re tired of laying around in bed all Saturday, or waiting for your next customer as an Uber driver.<br />

                                TimeSpare helps you fill those idle times with purposeful work by connecting you with locals around you who need your skills. <br />
                                <br />
                                We believe that good things happen when people help each other, whether across town or countries. Opportunities appear, open up, and become reality. 
                                With TimeSpare, a click of a button can lead to billions of moments of human connection as people around the world go all kinds of places with all kinds of skills with the help of our technology.</p>

                    </div>
                </div>

                <div className="right">
                    <div className="splash-box-2"></div>
                </div>
                    
            </div>

                <div className="description2">
                    <div className="left">
                        
                        {/* <div className="left-description">

                            <p>Sometimes, you find yourself with some free-time. You’re tired of laying around in bed all Saturday, or waiting for your next customer as an Uber driver.<br />

                                TimeSpare helps you fill those idle times with purposeful work by connecting you with locals around you who need your skills. <br />
                                <br />
                                We believe that good things happen when people help each other, whether across town or countries. Opportunities appear, open up, and become reality.
                                With TimeSpare, a click of a button can lead to billions of moments of human connection as people around the world go all kinds of places with all kinds of skills with the help of our technology.</p>

                        </div> */}
                    </div>

                    <div className="right">
                        {/* <div className="splash-box-2"></div> */}
                    </div>

                </div>

                <div className="description3">
                    <div className="right">

                        <div className="splash-box-2">

                        </div>
                    </div>

                    <div className="left">
                        <div className="left-description">
                            <p>Sometimes, you find yourself with some free-time. You’re tired of laying around in bed all Saturday, or waiting for your next customer as an Uber driver.<br />

                                TimeSpare helps you fill those idle times with purposeful work by connecting you with locals around you who need your skills. <br />
                                <br />
                                We believe that good things happen when people help each other, whether across town or countries. Opportunities appear, open up, and become reality.
                                With TimeSpare, a click of a button can lead to billions of moments of human connection as people around the world go all kinds of places with all kinds of skills with the help of our technology.</p>
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
)(Splash);
