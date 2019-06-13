import React, { Component } from "react";
import InputField from "~/components/input-field/";
import InputArea from "~/components/input-area/";
import Button from "~/components/button/";
import { IP } from "~/config";
import "./index.styl";
import styled from "styled-components";

const Page = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    messageStatus: ""
  };
  onEnter = e => {
    const { name, email, subject, message } = this.state;
    const isInvalid = !name || !email || !subject || !message;
    if (e.keyCode === 13 && !isInvalid) {
      this.sendMessage();
    }
  };
  componentDidMount() {
    window.addEventListener("keypress", this.onEnter);
  }
  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEnter);
  }
  sendMessage = () => {
    const { name, email, subject, message } = this.state;
    console.log(this.state);
    return fetch(`http://${IP}:9010/v1/sendEmail`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    })
      .then(() => this.setState({ messageStatus: "success" }))
      .catch(() => this.setState({ messageStatus: "failed" }));
  };

  render() {
    const { name, email, subject, message, messageStatus } = this.state;
    const { sendMessage } = this;

    const isInvalid = !name || !email || !subject || !message;

    return (
      <Page>
        <h1>Contact</h1>
        <p>email: officialfaux@outlook.com</p>
        <p>
          {messageStatus === "failed"
            ? "failed to send"
            : messageStatus === "success"
            ? "success!"
            : ""}
        </p>
        <InputField
          value={name}
          field="name"
          label="Your Name"
          type="text"
          placeholder="Enter your name"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={email}
          field="email"
          label="Your Email"
          type="text"
          placeholder="Enter your email"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={subject}
          field="subject"
          label="Subject"
          type="text"
          placeholder="Enter the subject"
          setState={obj => this.setState(obj)}
        />
        <InputArea
          value={message}
          field="message"
          label="Your Message"
          type="text"
          placeholder="Enter your message"
          setState={obj => this.setState(obj)}
        />
        <Button
          disabled={isInvalid}
          action={e => sendMessage(e)}
          label="Send Message"
        />
      </Page>
    );
  }
}
