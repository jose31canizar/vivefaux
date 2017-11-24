import React, { Component } from 'react';
import data from '../data/sections';
import Section from '../components/Section/Section';

class PageLayout extends Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    console.log(this.props.location);
    return (
      <div className='page-layout'>
        <div className='left-border'/>
        <div className='right-border'/>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
