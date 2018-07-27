import React, { Component } from "react";
import data from "../../data/sections";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Parallax from "../Parallax/Parallax";
import "./Contact.styl";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
      thankyou: ""
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  handleLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleMessage(event) {
    this.setState({ message: event.target.value });
  }
  handleSubject(event) {
    this.setState({ subject: event.target.value });
  }
  handleSubmit(event) {
    console.log(
      "A name was submitted: " +
        this.state.email +
        this.state.firstName +
        this.state.lastName +
        this.state.message +
        this.state.subject
    );
    this.addMember();
    event.preventDefault();
    // window.location.href = 'https://www.truewarrior.fm/congratulations/'
    this.setState({ thankyou: "Your message has been sent to Vivefaux." });
    return false;
  }
  addMember = () => {
    fetch("/api/addMember", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email_address: this.state.email,
        status: "subscribed",
        merge_fields: {
          firstName: this.state.firstName,
          lastName: this.state.firstName,
          message: this.state.message,
          subject: this.state.subject
        }
      })
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });
  };
  render() {
    return (
      <div className="contact-page">
        <Header title="Contact">
          <Parallax src={require("../../img/parallax/7.jpg")} yPosition="100" />
        </Header>
        <div className="section">
          <div className="section-title">
            <h1>{this.props.match.path.replace(/\//g, "")}</h1>
          </div>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <h4>Subject</h4>
            <input
              placeholder="subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleSubject}
            />
            <h4 className="name-label">First Name</h4>
            <input
              placeholder="first name"
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstName}
            />
            <h4 className="name-label">Last Name</h4>
            <input
              placeholder="last name"
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastName}
            />
            <h4>Email Address</h4>
            <input
              placeholder="email"
              type="email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <h4>Message</h4>
            <textarea
              rows="10"
              cols="50"
              value={this.state.message}
              onChange={this.handleMessage}
            />
            <input type="submit" value="Submit" />
            <h2 className="thank-you">{this.state.thankyou}</h2>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
