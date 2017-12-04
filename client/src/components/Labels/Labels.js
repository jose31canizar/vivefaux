import React, { Component } from 'react';
import data from '../../data/sections';
import Section from '../Section/Section';
import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax'
import './Labels.styl'

class Labels extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openLabels: data.map((block, i) => (false))
    }
    this.closeOtherPanels = this.closeOtherPanels.bind(this)
  }
  closeOtherPanels(i) {
    this.setState((prevState, props) => {
      const newState = prevState.openLabels.map((openLabel, index) => true ? i == index : false);
      return {
        openLabels: newState
      }
    })
  }
  render() {
    return (
      <div className='labels-page'>
      {this.props.header ? <Header>
        <Parallax src={require('../../img/parallax/8.jpg')} yPosition="50"/>
      </Header> : '' }
      {data.map((block, i) => (
        <Section
          key={i}
          index={i}
          title={block.title}
          name={block.name}
          description={block.description}
          soundcloud={block.soundcloud}
          letter={block.letter}
          releases={block.releases}
          artists={block.artists}
          wallpaper={block.wallpaper}
          closeOtherPanels={this.closeOtherPanels}
          closePanel={!this.state.openLabels[i]}
          />
      ))}
      </div>
    );
  }
}

export default Labels;
