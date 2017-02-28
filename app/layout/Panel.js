var React = require('react');
var SmoothScroll = require('./SmoothScroll');

var Panel = React.createClass({
  clickPanel: function() {
    this.props.onChange(this.props.index, 'click');
  },
  hoverPanel: function() {
    this.props.onChange(this.props.index, 'hover');
  },
  render: function() {

    //Object.assign({}, Panel, PanelFocused) //multiple styles

    return (

      <div className={'PanelClass'} onMouseUp={this.clickPanel} onMouseOver={this.hoverPanel}>
        <SmoothScroll Array={[this.props.sectionName]}>
          {this.props.name}
          </SmoothScroll>
      </div>

      );
  }
});

module.exports = Panel;
