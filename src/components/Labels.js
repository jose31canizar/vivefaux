import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';

class Labels extends Component {
  render() {
    return (
      <div className='labels-page'>
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
