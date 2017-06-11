import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='left-frame'/>
        <div className='right-frame'/>
        <div className='banner-container'>
          <div className='logo'>
          <h1>Vivefaux</h1>
          </div>
          <img className='banner' src={require('../img/0.jpg')}/>
        </div>
      {data.map((block, i) => (
        <Section
          title={block.title}
          panel={block.panel}
          releases={block.releases}
          artists={block.artists}
          />
      ))}
      </div>
    );
  }
}

export default Home;
