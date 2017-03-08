var React = require('react');
var SmoothScroll = require('./SmoothScroll');

var Panel = React.createClass({
  getInitialState: function() {
    var squareSpacing = 110;
    var panelOpenState = 600;
    var cellCount = 3;
    var rowIndex = (Math.floor(this.props.index / cellCount));
    var columnIndex = (this.props.index % cellCount);
    return {panelButtonStyle: {
        left: "" + (60 + columnIndex*10.0) + "vw",
        top: "" + (0 + rowIndex*10.0) + "vw",
        width: "9vw",
        height: "9vw",
        paddingRight: "0%"
      }
    };
  },
  clickPanel: function() {
    this.props.onChange(this.props.index);
  },
  componentWillReceiveProps(newProps) {
    console.log(' click: ' + newProps.clickPanelIndex);
    var squareSpacing = 110;
    var panelOpenState = 600;
    var cellCount = 3;
    var rowIndex = (Math.floor(newProps.index / cellCount));
    var columnIndex = (newProps.index % cellCount);
    var panelHoverColor = "#f25555";
    if(newProps.index == newProps.clickPanelIndex && newProps.aPanelIsOpen) {
      console.log("OPENING");
      this.setState((prevState,props) => {
            return {
            panelButtonStyle: {
              left: "5vw",
              top: "-20vh",
              width: "90vw",
              height: "70vh",
              paddingRight: "50%",
              backgroundColor: panelHoverColor,
              zIndex: 999
            }}
      });
    } else {
      console.log("closing");
      this.setState((prevState,props) => {
            return {panelButtonStyle: {
                left: "" + (60 + columnIndex*10.0) + "vw",
                top: "" + (0 + rowIndex*10.0) + "vw",
                width: "9vw",
                height: "9vw",
                paddingRight: "0%"
              }}
      });
    }
  },
  render: function() {
    var squareSpacing = 110;
    var panelOpenState = 600;
    var cellCount = 3;
    var rowIndex = (Math.floor(this.props.index / cellCount));
    var columnIndex = (this.props.index % cellCount);
    var panelHoverColor = "#f25555";
    //Object.assign({}, Panel, PanelFocused) //multiple styles

    return (

      <div className={'PanelClass'} onMouseDown={this.clickPanel}>
        <SmoothScroll Array={[this.props.sectionName]} style={this.state.panelButtonStyle}>
          {this.props.name}
          </SmoothScroll>
      </div>

      );
  }
});

module.exports = Panel;
