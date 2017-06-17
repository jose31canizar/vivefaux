import React, { Component } from 'react';
import data from '../constants/sections';
import Section from '../components/Section';

class PageLayout extends Component {
  render() {
    return (
      <div className='page-layout'>
        <div className='left-frame'/>
        <div className='right-frame'/>
        <div className='banner-container'>
          <div className='logo'>
          <h1>Vivefaux</h1>
          </div>
          <img className='banner' src={require('../img/0.jpg')}/>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
