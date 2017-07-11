import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import PageLayout from './PageLayout'
import Footer from '../components/Footer'

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <NavBar/>
        <PageLayout>
          {this.props.children}
        </PageLayout>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
