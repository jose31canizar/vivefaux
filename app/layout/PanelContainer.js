var React = require('react');
var Panel = require('./Panel');


var PanelContainer = React.createClass({
  getInitialState: function() {
    return {aPanelIsOpen: false, clickPanelIndex: -1, hoverPanelIndex: -1};
  },
  handleChange: function(i, s) {
    if(s == 'hover') {
      this.setState((prevState,props) => {
            return {aPanelIsOpen: !prevState.aPanelIsOpen, hoverPanelIndex: i}
      });
    } else if (s == 'click'){
      if (this.state.aPanelIsOpen == false) {
        this.setState((prevState,props) => {
              return {aPanelIsOpen: !prevState.aPanelIsOpen, clickPanelIndex: i}
        });
      } else {
        console.log('close panel');
        this.setState((prevState,props) => {
              return {aPanelIsOpen: !prevState.aPanelIsOpen, clickPanelIndex: -1}
        });
      }

    }

    console.log('hover: ' + this.state.hoverPanelIndex + ' click: ' + this.state.clickPanelIndex);

  },
  render: function() {

    var self = this; //enables me to pass this into a map function
    return (
      <div className={'PanelContainer'}>
        {this.props.panels.map(function(panel, i) {return <Panel focused={0} key={i} name={panel} onChange={self.handleChange} index={i} id={panel} clickPanelIndex={self.state.clickPanelIndex} sectionName={self.props.sectionName}></Panel>})}
      </div>
      );
  }
});

module.exports = PanelContainer;
