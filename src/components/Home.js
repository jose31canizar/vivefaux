import React, { Component } from 'react'
import data from '../constants/sections'
import Section from './Section'
import Labels from './Labels'

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
      <div className='news-feed'>
        <div className='text-block'>
        <h3>Origin</h3>
        <p>Vivefaux announces the release of Origin, a collaborative project stringing together various sounds from the Vivefaux collective.</p>
        </div>
        <div className='text-block'>
        <h3>Origin</h3>
        <p>Vivefaux announces the release of Origin, a collaborative project stringing together various sounds from the Vivefaux collective.</p>
        </div>
        <div className='text-block'>
        <h3>Origin</h3>
        <p>Vivefaux announces the release of Origin, a collaborative project stringing together various sounds from the Vivefaux collective.</p>
        </div>
        <p></p>
      </div>
      <Labels/>
      </div>
    );
  }
}

export default Home;
