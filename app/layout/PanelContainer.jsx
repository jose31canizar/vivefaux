import React, {Component} from 'react';
import Panel from './Panel.jsx';

class PanelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickPanelIndex: -1,
      aPanelIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(i) {
    console.log('handling change!');

    this.setState((prevState, props) => {
      return {
      clickPanelIndex: i,
      aPanelIsOpen: !(prevState.aPanelIsOpen)
      }
    });
  }
  render() {
    var self = this;
    var panels = this.props.panels;
    var panels2 = this.props.panels;
    const full_length = this.props.panels.length;
    const half_length = Math.floor(full_length / 2)
    var leftSide = panels.slice(0, half_length);
    var rightSide = panels.slice(half_length, full_length);

    return (
      <div className={'PanelContainer'}>
        <div className={'topRowGroup'}>
        {leftSide.map(function(panel, i) {
          return <Panel
            className={'topRowItem'}
            focused={0}
            key={i}
            name={panel}
            onChange={self.handleChange}
            index={i}
            id={panel}
            clickPanelIndex={self.state.clickPanelIndex}
            aPanelIsOpen={self.state.aPanelIsOpen}
            section={self.props.section}
            panel={self.props.panels[i]}>
          </Panel>})}
        </div>
        <div className={'bottomRowGroup'}>
          {rightSide.map(function(panel, i) {
            return <Panel
              className={'bottomRowItem'}
              focused={0}
              key={i}
              name={panel}
              onChange={self.handleChange}
              index={i + half_length}
              id={panel}
              clickPanelIndex={self.state.clickPanelIndex}
              aPanelIsOpen={self.state.aPanelIsOpen}
              section={self.props.section}
              panel={self.props.panels[i+half_length]}>
            </Panel>})}
          </div>
      </div>
      );
  }
};

export default PanelContainer;
