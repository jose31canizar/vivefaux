import React, { Component } from 'react';
import data from '../constants/navbar.json';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <ul>
          {data.map((item, i) => (
            <Link className="nav-link" to={`/${item.route}`}>
              <li className="nav-item-above">
                {item.title}
              </li>
              <li className="nav-item">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;
