import React, { Component } from 'react';
import data from '../../data/sections';
import Section from '../Section/Section';
import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax'

class Labels extends Component {
  render() {
    console.log(data[0].wallpaper);
    return (
      <div className='labels-page'>
      {this.props.header ? <Header>
        <Parallax src={require('../../img/parallax/8.jpg')} yPosition="50"/>
      </Header> : '' }
      {data.map((block, i) => (
        <Section
          key={i}
          title={block.title}
          name={block.name}
          description={block.description}
          soundcloud={block.soundcloud}
          letter={block.letter}
          releases={block.releases}
          artists={block.artists}
          wallpaper={block.wallpaper}
          />
      ))}
      </div>
    );
  }
}

export default Labels;
