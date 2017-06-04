import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';

class About extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='banner-container'>
          <div className='logo'>
          <h1>About Vivefaux</h1>
          </div>
          <img className='banner' src={require('../img/0.jpg')}/>
        </div>
        <div className='text-container'>
          <h3>Vivefaux is a collaborative project based out of Boulder, Colorado.</h3>
          <p></p>
        </div>

      </div>
    );
  }
}

export default About;
