import React from "react";
import NavBarButton from "../NavBarButton";
import { withRouter } from "react-router";
import SubmitButton from "../SubmitButton";
import Input from "../Input";
import "./form.css";
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
    this.props
      .createNewUser(user)
      .then(() => this.props.history.push("/profile"));
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
    const SwitchStyle = {
      // padding: "0  0 auto",
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div>
        <form className="form">
          {this.renderErrors()}
          <Input
            type="text"
            value={this.state.username}
            onChange={this.handleInput("username")}
            placeholder="Username"
          />
          <Input
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Password"
          />
          <Input
            type="password"
            value={this.state.password2}
            onChange={this.handleInput("password2")}
            placeholder="Re-Enter Your Password"
          />
          <SubmitButton onClick={this.handleSubmit} label="Sign Up" />
          <div style={SwitchStyle}>
            <p>Already have an account?</p>
            <NavBarButton
              label="Sign In"
              onClick={() => this.props.onSwitchButtonClick("Sign In")}
              noBackground={true}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
