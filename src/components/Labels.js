import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';
import Header from './Header/Header';
import Parallax from './Parallax/Parallax'

class Labels extends Component {
  render() {
    return (
      <div className='labels-page'>
      {this.props.header ? <Header>
        <Parallax src={require('../img/parallax/8.jpg')} yPosition="50"/>
      </Header> : '' }
      {data.map((block, i) => (
        <Section
          title={block.title}
          name={block.name}
          description={block.description}
          letter={block.letter}
          releases={block.releases}
          artists={block.artists}
          />
      ))}
      </div>
    );
  }
}

export default Labels;
