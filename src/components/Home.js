import React, { Component } from 'react';
import data from '../constants/sections';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
      {data.map((block, i) => (
        <div className='section'>
          <div className='section-title'>
            <h1>
              {block.title}
            </h1>
          </div>
          <div className='panel'>
            <h3>
              {block.panel}
            </h3>
          </div>
        </div>
      ))}
      </div>
    );
  }
}

export default Home;
