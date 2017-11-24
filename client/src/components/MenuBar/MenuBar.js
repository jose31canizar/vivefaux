import React, { Component } from 'react';
import SmoothScroll from '../SmoothScroll';
import data from '../../content/sections.json';

class MenuBar extends Component {
  render() {
    return (
    <div className='menu-bar'>
      <div className='menu-bar-item'>
        <div className='menu-bar-circle'>
        </div>
        <h3>
          Warriorfy
        </h3>
      </div>
      <div className='menu-bar-item'>
        <div className='menu-bar-circle'>
        </div>
        <h3>
          Introduction
        </h3>
      </div>
      {data.map((item, i) => (
        <div className='menu-bar-item'>
          <div className='menu-bar-circle'>
          </div>
          <h3>
          {item.title}
          </h3>
        </div>
      ))}
      <div className='menu-bar-item'>
        <div className='menu-bar-circle'>
        </div>
        <h3>
          Angel List
        </h3>
      </div>
    </div>
  );
  }
}

export default MenuBar;
