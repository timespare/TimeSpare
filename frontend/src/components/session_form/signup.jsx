import React from "react";
import NavBarButton from "../NavBarButton";
import { withRouter } from "react-router";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.createNewUser(user).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    const signUpErrorStyle = {
      listStyle: "none",
      paddingLeft: "0"
    };
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`} style={signUpErrorStyle}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-session-form">
        <form>
          <div className="logo" />
          {this.renderErrors()}
          <br />
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput("username")}
            placeholder="Username"
            className="username"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Password"
            className="password"
          />
          <input
            type="password"
            value={this.state.password2}
            onChange={this.handleInput("password2")}
            placeholder="Re-Enter Your Password"
            className="password"
          />
          <button onClick={this.handleSubmit}>Sign Up</button>
          <p className="no-account">Already have an account?</p>
          <NavBarButton
            label="Sign In"
            onClick={() => this.props.onSwitchButtonClick("Sign In")}
            noBackground={true}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
