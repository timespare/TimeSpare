import React from "react";
import NavBarButton from "../NavBarButton";
import { withRouter } from "react-router";
import SubmitButton from "../SubmitButton";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
    this.props.processForm(user).then(() => this.props.history.push("/"));
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

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({ username: "demo", password: "password" });
  }

  render() {
    return (
      <div className="login-session-form">
        <form>
          {this.renderErrors()}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput("username")}
            placeholder="Username"
            className="login-username"
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Password"
            className="login-password"
          />

          <SubmitButton onClick={this.handleSubmit} label="Sign In" />
          <SubmitButton onClick={this.handleDemo} label="Demo User LogIn" />
          <p className="no-account">
            Don't have an account?
            <NavBarButton
              label="Sign Up"
              onClick={() => this.props.onSwitchButtonClick("Sign Up")}
              noBackground={true}
            />
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
