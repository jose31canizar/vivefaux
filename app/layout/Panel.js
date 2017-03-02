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

    var squareSpacing = 110;
    var panelOpenState = 600;
    var cellCount = 2;


    var panelStyle = {
    }

    var panelButtonStyle = {
      transform: "translateX(" + (this.props.index % cellCount)*squareSpacing + "%) translateY(" + (Math.floor(this.props.index / cellCount))*squareSpacing + "%)",
      width: "9vw",
      height: "9vw"
    }

    if(this.props.index == this.props.clickPanelIndex) {
      console.log(" " + this.props.index + " panel is selected!");
      panelStyle = {
        transition: "width 0.2s ease-in-out",
      };
      panelButtonStyle = {
        marginLeft: "-33.33%",
        width: "100%",
        height: "500px",
        marginTop: "-150px",
        backgroundColor: "#f27460",
        zIndex: "999"
      }
    }

    //        transform: "translateX(-" + panelOpenState + "%)",

    //Object.assign({}, Panel, PanelFocused) //multiple styles

    return (

      <div style={panelStyle} className={'PanelClass'} onMouseDown={this.clickPanel} onMouseOver={this.hoverPanel}>
        <SmoothScroll Array={[this.props.sectionName]} style={panelButtonStyle}>
          {this.props.name}
          </SmoothScroll>
      </div>

      );
  }
});

module.exports = Panel;
