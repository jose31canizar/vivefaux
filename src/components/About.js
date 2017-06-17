import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';

class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <div className='section'>
          <div className='section-title'>
            <h1>About</h1>
          </div>
          <div className='text-block'>
            <h3>A collaborative project based out of Boulder, Colorado.</h3>
            <p>ViveFaux is a multimedia company formed in 2014 and based around the world. We are a group of several divisions including: Sōken Costa, Kamakura Records, the Blacq Label, and Infinite Vivacity Films.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
