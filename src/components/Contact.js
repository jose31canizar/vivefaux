import React, { Component } from 'react'
import data from '../constants/sections'
import Section from './Section'
import Header from './Header/Header'
import Parallax from './Parallax/Parallax'

class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <Header>
          <Parallax src={require('../img/parallax/7.jpg')} yPosition="100"/>
        </Header>
        <div className='section'>
          <div className='section-title'>
            <h1>{this.props.match.path.replace(/\//g, '')}</h1>
          </div>
          <div className='contact-form'>
            <h4>Subject</h4>
            <input />
            <h4 className='name-label'>First Name</h4>
            <input />
            <h4 className='name-label'>Last Name</h4>
            <input />
            <h4>Email Address</h4>
            <input />
            <h4>Message</h4>
            <textarea rows="10" cols="50"/>
            <button type="submit" form="form1" value="Submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
