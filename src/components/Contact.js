import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';

class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <div className='section'>
          <div className='section-title'>
            <h1>About</h1>
          </div>
          <div className='contact-form'>
            <h4>Subject</h4>
            <input className='wide'/>
            <span>
            <h4 className='name-label'>First Name</h4>
            <h4 className='name-label'>Last Name</h4>
            </span>
            <span className='name'>
              <input />
              <input />
            </span>
            <h4>Email Address</h4>
            <input className='wide'/>
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
