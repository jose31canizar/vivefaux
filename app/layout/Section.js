var React = require('react');
var NavBar = require('./Navbar');
var Panel = require('./Panel');

var Section = React.createClass({
    render: function () {
        return (
            <div className={'Section'} id={this.props.name}>
                <h2>{this.props.name}</h2>
                  <div>
                    <div>{this.props.panels.map(function(panel, i) {return <div key={i}>{panel}</div>})}</div>
                    <div>Total Panels: {this.props.numPanels}</div>
                  </div>
            </div>
        );
    }
});

module.exports = Section;
