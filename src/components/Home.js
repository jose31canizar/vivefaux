import React, { Component } from 'react';
import data from '../constants/sections';
import Section from './Section';
import Panel from './Panel';


class Home extends Component {
  render() {
    return (
      <div className="home-page">
      {data.map((block, i) => (
        <Section>
          <div className='section-title'>
            <h1>
              {block.title}
            </h1>
          </div>
          <Panel>
              {block.panel}            
          </Panel>
        </Section>
      ))}
      </div>
    );
  }
}

export default Home;
