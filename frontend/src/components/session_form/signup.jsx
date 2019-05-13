import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user).then(() => this.props.history.push("/listings"));
    }

    renderErrors() {
        return (
            <ul className="signup-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
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
                    <div className="logo"></div>
                    <h2>Sign Up</h2>
                    {this.renderErrors()}
                    <br></br>

                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        placeholder="Username"
                        className="username"
                    />

                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="Password"
                        className="password"
                    />

                    <button onClick={this.handleSubmit}>Sign Up</button>
                    <p className="no-account">Already have an account? <a className="signup-link" href="/#/login">Log in!</a></p>
                </form>
            </div>
        );
    }
}

export default Signup;