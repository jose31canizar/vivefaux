import React, { Component } from 'react';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelStyle: 'panel closed'
    }

    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel() {
    this.setState((prevState, props) => {
      var newPanelStyle;
      if(prevState.panelStyle === 'panel closed') {
        newPanelStyle = 'panel open';
      } else if(prevState.panelStyle === 'panel open') {
        newPanelStyle = 'panel closed';
      }
      return {
        panelStyle: newPanelStyle
      }
    });
  }
  render() {
    return (
      <div className={this.state.panelStyle} onMouseDown={this.togglePanel}>
        <h3>
        {this.props.children}
        </h3>
      </div>
    );
  }
}

export default Panel;
