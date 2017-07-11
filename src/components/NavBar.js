import React, { Component } from 'react';
import data from '../constants/navbar.json';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "Home"
    }
    this.setSelected = this.setSelected.bind(this)
  }
  setSelected(title) {
    this.setState({
      selected: title
    })
  }
  render() {
    return (
      <div className='nav-bar'>
        <ul>
          {data.map((item, i) => (
            <Link className="nav-link" to={`/${item.route}`} onMouseDown={this.setSelected.bind(this, item.title)}>
              <li className={"nav-item-above "  + (item.title === this.state.selected ? "selected-page" : "")}>
                {item.title}
              </li>
              <li className={"nav-item " + (item.title === this.state.selected ? "selected-page" : "")} onMouseDown={this.setSelected.bind(this, item.title)}>
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
