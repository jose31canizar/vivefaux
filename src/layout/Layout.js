import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
