import React from "react";
import NavBarButton from "../NavBarButton";
import { withRouter } from "react-router";
import SubmitButton from "../SubmitButton";
import Input from "../Input";
import "./form.css";
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
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
<<<<<<< HEAD
    this.props.processForm(user).then(
      () => this.props.history.push("/profile")
      // err => console.log("1" + err)
    );

    this.props.onClose;
=======
    this.props.processForm(user);
>>>>>>> 9b275ff28e099df23f7ec7f6df62bce9c21d9787
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
    // .then(() => {
    //   this.props.history.push("/profile");
    // });
  }

  render() {
    const SwitchStyle = {
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
