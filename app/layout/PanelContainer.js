var React = require('react');
var Panel = require('./Panel');

var PanelContainer = React.createClass({
  getInitialState: function() {
    return {clickPanelIndex: -1, aPanelIsOpen: false};
  },
  handleChange: function(i) {
    this.setState((prevState, props) => {
      return {
      clickPanelIndex: i,
      aPanelIsOpen: !(prevState.aPanelIsOpen)
      }
    });
  },
  render: function() {

    var self = this; //enables me to pass this into a map function
    return (
      <div className={'PanelContainer'}>
        {this.props.panels.map(function(panel, i) {return <Panel focused={0} key={i} name={panel} onChange={self.handleChange} index={i} id={panel} clickPanelIndex={self.state.clickPanelIndex} aPanelIsOpen={self.state.aPanelIsOpen} sectionName={self.props.sectionName}></Panel>})}
      </div>
      );
  }
});

module.exports = PanelContainer;
