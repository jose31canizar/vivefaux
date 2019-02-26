import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.styl";
import InputField, { byPropKey } from "../../items/input-field/InputField";
import Button from "../../items/button/Button";
import { SignUpLink } from "../signup/Signup";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";
import { PasswordForgetLink } from "../password-forget/PasswordForget";
const LoginPage = ({ history }) => <Login history={history} />;

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class Login extends Component {
  state = {
    ...INITIAL_STATE
  };
  authenticate = e => {
    const { history } = this.props;
    const { email, password } = this.state;

    e.preventDefault();
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE }, () => {
          history.push(routes.DASHBOARD);
        });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };
  componentDidMount() {
    window.addEventListener("keypress", this.onEnter);
  }

  onEnter = e => {
    if (e.keyCode === 13) {
      this.authenticate(e);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEnter);
  }
  render() {
    const { email, password, error } = this.state;
    const { authenticate } = this;
    return (
      <section class="auth container">
        <h3>vivefaux</h3>
        <InputField
          value={email}
          field="email"
          label="Email"
          type="text"
          placeholder="Your email"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={password}
          field="password"
          label="Passord"
          type="password"
          placeholder="Passord"
          setState={obj => this.setState(obj)}
        />
        <Button action={e => authenticate(e)} label="Log In" />
        {error && <p>{error.message}</p>}
        <PasswordForgetLink />
        <SignUpLink />
      </section>
    );
  }
}

const LoginLink = () => (
  <p>
    Already have an account? <Link to={routes.LOG_IN}>Log in</Link>
  </p>
);

export default withRouter(LoginPage);

export { LoginLink };
