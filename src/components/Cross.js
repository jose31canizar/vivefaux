import React, { Component } from 'react';

class Cross extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crossStyle: 'not-shown'
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.panelStyle === 'open') {
      this.setState({
        crossStyle: 'shown'
      })
    } else {
      this.setState({
        crossStyle: 'not-shown'
      })
    }
  }
  render() {
    return (
      <div className={'cross ' + this.state.crossStyle} onMouseDown={this.props.togglePanel}>
        <div className='left-bar'/>
        <div className='right-bar'/>
      </div>
    );
  }
}

export default Cross;
