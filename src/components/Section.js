import React, { Component } from 'react';
import Panel from './Panel';

class Section extends Component {
  render() {
    return (
      <div className='section'>
        <div className='section-title'>
          <h1>
            {this.props.title}
          </h1>
        </div>
        <Panel
          releases={require('../constants/' + this.props.releases + '.json')}
          title={this.props.title}>
            {this.props.panel}
        </Panel>
      </div>
    );
  }
}

export default Section;
