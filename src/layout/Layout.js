import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import PageLayout from './PageLayout'

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <NavBar/>
        <PageLayout>
          {this.props.children}
        </PageLayout>
      </div>
    );
  }
}

export default Layout;
