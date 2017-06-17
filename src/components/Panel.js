import React, { Component } from 'react';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelStyle: 'closed'
    }

    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel() {
    this.setState((prevState, props) => {
      var newPanelStyle;
      if(prevState.panelStyle === 'closed') {
        newPanelStyle = 'open';
      } else if(prevState.panelStyle === 'open') {
        newPanelStyle = 'closed';
      }
      return {
        panelStyle: newPanelStyle
      }
    });
  }
  render() {
    var content;
    var self = this;
    if (this.state.panelStyle === 'open') {
      content = <div className='split-pane'>
        <div className='left-pane'>
          <h1>{self.props.title}</h1>
          <p>Artist Collective & Record Label</p>
        </div>
        <div className='right-pane' dangerouslySetInnerHTML={{__html: this.props.releases}}>
        </div>
      </div>
    }
    return (
      <div>
        <div className={'panel-container ' + this.state.panelStyle}>
          <div className='panel' onMouseDown={this.togglePanel}>
          <h3>{this.props.letter}</h3>
          </div>
        </div>
        {content}
      </div>

    );
  }
}

export default Panel;
