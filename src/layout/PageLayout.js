import React, { Component } from 'react';
import data from '../constants/sections';
import Section from '../components/Section';

class PageLayout extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div className='page-layout'>
        <div className='left-frame'/>
        <div className='right-frame'/>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
