var React = require('react');
var Section = require('./layout/Section');
var Button = require('./layout/Button');

var App = React.createClass({
  getInitialState: function() {
    return {numPanels: 3, panels: ['artists', 'stream', 'releases']};
  },
  addPanel: function() {
    this.setState((prevState, props) => {
      var newNumPanels = prevState.numPanels += 1;
      var newPanels = prevState.panels;
      newPanels.push('panelnew' + newNumPanels);
      return {numPanels: newNumPanels, panels: newPanels};
    });
  },
  render: function() {
    return (
      <div>
        <Button onChange={this.addPanel}/>
        <Section numPanels={this.state.numPanels} panels={this.state.panels}/>
      </div>
    );
  }
});

module.exports = App;
