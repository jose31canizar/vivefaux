var React = require('react');
var Panel = require('./Panel');

var Section = React.createClass({
  render: function() {
    return (
        <div>
          <div>{this.props.panels.map(function(panel, i) {return <div key={i}>{panel}</div>})}</div>
          <div>Total Panels: {this.props.numPanels}</div>
        </div>
    );
  }
});

module.exports = Section;
