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
          title={this.props.title}
          letter={this.props.letter}
          releases={require(`../constants/${this.props.title.toLowerCase()}-releases.md`)}>
        </Panel>
      </div>
    );
  }
}

export default Section;
