import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Signup.styl";
import * as routes from "../../constants/routes";
import { auth, db } from "../../firebase";
import InputField, { byPropKey } from "../../items/input-field/InputField";
import Button from "../../items/button/Button";
import { LoginLink } from "../login/Login";

const SignUpPage = ({ history }) => <SignUpForm history={history} />;

const INITIAL_STATE = {
  name: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  attempted: false
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  signup = event => {
    const { name, email, passwordOne } = this.state;
    console.log(email);
    console.log(passwordOne);
    const { history } = this.props;

    event.preventDefault();

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        //create a user in my own firebase database
        db.doCreateUser(authUser.user.uid, name, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.DASHBOARD);
          })
          .catch(error => {
            console.log(error);
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        console.log(error);
        this.setState(byPropKey("error", error));
      });
  };

  componentDidMount() {
    window.addEventListener("keypress", this.onEnter);
  }

  onEnter = e => {
    if (e.keyCode === 13) {
      this.signup(e);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEnter);
  }

  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      error,
      attempted
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      name === "";

    return (
      <section class="auth container">
        <InputField
          value={name}
          field="name"
          label="Name"
          type="text"
          placeholder="Full Name"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={email}
          field="email"
          label="Email"
          type="text"
          placeholder="Email Address"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={passwordOne}
          type="password"
          field="passwordOne"
          label="Password"
          placeholder="Password"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={passwordTwo}
          type="password"
          field="passwordTwo"
          label="Confirmation"
          placeholder="Confirm Password"
          setState={obj => this.setState(obj)}
        />
        <Button
          action={this.signup}
          label="Sign Up >>"
          disabled={isInvalid}
          attempt={e => {
            this.setState({ attempted: true });
            e.preventDefault();
          }}
        />

        {error && <p>{error.message}</p>}
        {isInvalid &&
          attempted && <p>Invalid input 😔 (do your passwords match?)</p>}
        <LoginLink />
      </section>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account?
    <Link to={routes.SIGN_UP}> Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
