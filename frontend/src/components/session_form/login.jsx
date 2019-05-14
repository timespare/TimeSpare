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
    this.props.processForm(user);
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
    const LoginInputStyle = {
      width: "470px",
      height: "60px",
      borderRadius: "5px",
      margin: "20px auto 0 auto",
      display: "flex",
      fontSize: "16px"
    };
    const SwitchStyle = {
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div>
        <form>
          {this.renderErrors()}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput("username")}
            placeholder="Username"
            style={LoginInputStyle}
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Password"
            style={LoginInputStyle}
          />

          <SubmitButton onClick={this.handleSubmit} label="Sign In" />
          <SubmitButton onClick={this.handleDemo} label="Demo User LogIn" />
          <div style={SwitchStyle}>
            <p>
              Don't have an account?
              <NavBarButton
                label="Sign Up"
                onClick={() => this.props.onSwitchButtonClick("Sign Up")}
                noBackground={true}
              />
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
