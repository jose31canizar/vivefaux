var React = require('react');

var Button = React.createClass({
  handleChange: function() {
    this.props.onChange();
  },
  render: function() {
    return <button onClick={this.handleChange}>Add a Panel!</button>;
  }
});

module.exports = Button;
