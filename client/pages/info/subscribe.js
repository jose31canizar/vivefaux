import React, { Component } from "react";
import InputField, { byPropKey } from "../../components/input-field";
import Button from "../../components/button";

const INITIAL_STATE = {
  email: "",
  error: null,
  message: ""
};

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    event.preventDefault();
  };

  render() {
    const { email, error, message } = this.state;

    const { authenticate, onSubmit } = this;

    const isInvalid = email === "";

    return (
      <section className="auth container">
        <h3>Subscribe to our email list!</h3>
        <InputField
          value={email}
          label="Email"
          field="email"
          setState={obj => this.setState(obj)}
          type="text"
          placeholder="Your email"
        />
        <Button
          disabled={isInvalid}
          action={e => onSubmit(e)}
          label="Subscribe!"
        />

        {error && <p>{error.message}</p>}
        {message && <p>{message}</p>}
      </section>
    );
  }
}

export default Subscribe;
