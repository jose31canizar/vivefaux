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
    var transitionTime = '0.25s';
    var panelTransition = 'margin-left ' + transitionTime + ' ease-in-out,' + 'width 0.5s ' + transitionTime;

    var panelLeftMargin = '10%';
    var panelWidth = '50px';
    var panelHeight = '5vh';
    var panelOpacity = '1';
    var panelPos = 'relative';
    var panelTopMargin ='10%';
    var panelZIndex = '0';
    // if (this.props.clickPanelIndex == this.props.index) {
    //   panelWidth = '80%';
    //   this.state.panelLeftMargin = '5%';
    //   panelHeight = '50vh';
    //   panelOpacity = '1';
    //   panelPos = 'absolute';
    //   panelTopMargin = '5%';
    //   //setTimeout(function() { console.log('timed out!'); this.setState({panelLeftMargin: '-40%'}); }.bind(this), 2000);
    // }

    if (this.props.clickedIndex == this.props.index && this.props.name == 'hoveredPanel') {
      panelOpacity = '0.9';
      panelPos = 'absolute';
      panelTopMargin = '5%';
      panelLeftMargin = '-40%';
      panelZIndex = '9999';
      panelWidth = '80%';
    } else if (this.props.name == 'hoveredPanel') {
      panelOpacity = '1.0';
      panelPos = 'absolute';
      panelTopMargin = '5%';
      panelLeftMargin = this.props.index + '5%';
      panelZIndex = '9999';
    }

    var Panel = {
      transition: panelTransition,
      MozTransition: panelTransition,
      WebkitTransition: panelTransition,
      opacity: panelOpacity,
      height: '50px',
      backgroundColor: '#f25555',
      width: panelWidth,
      clear: 'both',
      display: 'inline-block',
      marginLeft: panelLeftMargin,
      marginTop: panelTopMargin,
      position: panelPos,
      zIndex: panelZIndex,
    };

    //Object.assign({}, Panel, PanelFocused) //multiple styles

    return (

      <div style={Panel} className={'PanelClass'} onMouseUp={this.clickPanel} onMouseOver={this.hoverPanel}>
        <SmoothScroll Array={[this.props.sectionName]}>
          {this.props.name}
          </SmoothScroll>
      </div>

      );
  }
});

module.exports = Panel;
