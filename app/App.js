var React = require('react');
var Header = require('./layout/Header');
var Footer = require('./layout/Footer');
var Navigation = require('./layout/Navigation');
var BaselineFooter = require('./layout/BaselineFooter');
var Section = require('./layout/Section');
var Button = require('./layout/Button');
var Data = require('./data/Sections.json');

var App = React.createClass({
  getInitialState: function() {
    return {sectionsArray: ["Kamakura", "Soken Costa", "Black Label", "Collaborators"]};
  },
  render: function() {
    return (
      <div>
        <Header sectionsArray={this.state.sectionsArray}>
          {this.state.sectionsArray.map((name, i) => (
              <h3 key={i} id={"navTo" + name}>
                {this.state.sectionsArray[i]}
              </h3>))}
        </Header>

        {this.state.sectionsArray.map((name, i) => <Section key={i} id={name} panels={Data[i].panels} sectionImage={Data[i].backgroundImage} name={name}/>)}

        <Navigation sectionsArray={this.state.sectionsArray}>
          {this.state.sectionsArray.map((name, i) => <h3 key={i} id={"navElement" + i}>{this.state.sectionsArray[i]}</h3>)}
        </Navigation>
        <Footer />
        <BaselineFooter />
      </div>
    );
  }
});

module.exports = App;
