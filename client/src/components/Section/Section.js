import React, { Component } from 'react';
import Panel from '../Panel/Panel';
import './Section.styl'

class Section extends Component {
  render() {
    return (
      <div className='section' id={this.props.title.toLowerCase()}>
        <div className='section-title'>
          <h1>
            {this.props.title}
          </h1>
        </div>
        <Panel
          index={this.props.index}
          title={this.props.title}
          description={this.props.description}
          soundcloud={this.props.soundcloud}
          letter={this.props.letter}
          releases={require(`../../data/${this.props.name}-releases.md`)}
          wallpaper={this.props.wallpaper}
          closeOtherPanels={this.props.closeOtherPanels}
          closePanel={this.props.closePanel}
          >
        </Panel>
      </div>
    );
  }
}

export default Section;
