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
    var cellCount = 3;
    var rowIndex = (Math.floor(this.props.index / cellCount));
    var columnIndex = (this.props.index % cellCount);
    var panelHoverColor = "#f25555";

    var panelStyle = {
    }

    var panelButtonStyle = {
      left: "" + (60 + columnIndex*10.0) + "vw",
      top: "" + (0 + rowIndex*10.0) + "vw",
      width: "9vw",
      height: "9vw",
      paddingRight: "0%"
    }

    if(this.props.index == this.props.clickPanelIndex) {
      console.log(" " + this.props.index + " panel is selected!");
      panelStyle = {
      };
      panelButtonStyle = {
        left: "5vw",
        top: "-20vh",
        width: "90vw",
        height: "70vh",
        paddingRight: "50%",
        backgroundColor: panelHoverColor,
        zIndex: 999
      }
    }

    //        transform: "translateX(" + columnIndex*squareSpacing + "%) translateY(" + rowIndex*squareSpacing + "%)",


    // marginLeft: "-" + (33.33 + columnIndex*(9)) + "%",
    // width: "10vw",
    // height: "500px",
    // marginTop: "-150px",
    // backgroundColor: "#f27460",
    // zIndex: "999"

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
