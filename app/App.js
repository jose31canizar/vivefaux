var React = require('react');
var Header = require('./layout/Header');
var Footer = require('./layout/Footer');
var Navigation = require('./layout/Navigation');
var BaselineFooter = require('./layout/BaselineFooter');
var Section = require('./layout/Section');
var Button = require('./layout/Button');

var App = React.createClass({
  getInitialState: function() {
    return {numPanels: 3, panels: ['artists', 'stream', 'releases'], currentPage: 0, sectionsArray: ["Welcome", "Gallery"]};
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
        <Header />
                {this.state.sectionsArray.map((name, i) => <Section key={i} id={i} numPanels={this.state.numPanels} panels={this.state.panels} name={name}/>)}
                <Navigation />
                <Footer />
                <BaselineFooter />
        <Button onChange={this.addPanel}/>
      </div>
    );
  }
});

module.exports = App;
