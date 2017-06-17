import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';

class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <div className='text-container'>
          <h3>Vivefaux is a collaborative project based out of Boulder, Colorado.</h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default About;
