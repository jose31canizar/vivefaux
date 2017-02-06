var React = require('react');
var Panel = require('./Panel');


var PanelContainer = React.createClass({
  getInitialState: function() {
    return {aPanelIsOpen: false, clickPanelIndex: -1, hoverPanelIndex: -1};
  },
  handleChange: function(i, s) {
    if(s == 'hover') {
      this.setState((prevState,props) => {
            return {aPanelIsOpen: !prevState.aPanelIsOpen, hoverPanelIndex: i}
      });
    } else if (s == 'click'){
      if (this.state.aPanelIsOpen == false) {
        this.setState((prevState,props) => {
              return {aPanelIsOpen: !prevState.aPanelIsOpen, clickPanelIndex: i}
        });
      } else {
        console.log('close panel');
        this.setState((prevState,props) => {
              return {aPanelIsOpen: !prevState.aPanelIsOpen, clickPanelIndex: -1}
        });
      }

    }

    console.log('hover: ' + this.state.hoverPanelIndex + ' click: ' + this.state.clickPanelIndex);

  },
  render: function() {

    var PanelContainer = {
      transform: 'scale3D($carousel-dots-scale, $carousel-dots-scale, $carousel-dots-scale)',
      MozTransform: 'scale3D($carousel-dots-scale, $carousel-dots-scale, $carousel-dots-scale)',
      WebkitTransform: 'scale3D($carousel-dots-scale, $carousel-dots-scale, $carousel-dots-scale)',
      transition: 'all 0.25s ease-in-out',
      MozTransition: 'all 0.25s ease-in-out',
      WebkitTransition: 'all 0.25s ease-in-out',
      paddingLeft: '50%',
      width: '50%'
    };

    var PanelHover;
    if (this.state.hoverPanelIndex != -1) {
      PanelHover = <Panel clickedIndex={this.state.clickPanelIndex} key={this.state.hoverPanelIndex} name={'hoveredPanel'} onChange={this.handleChange} index={this.state.hoverPanelIndex} id={'focus'} clickPanelIndex={this.state.clickPanelIndex} sectionName={this.props.sectionName}></Panel>;
    }

    var self = this; //enables me to pass this into a map function
    return (
      <div style={PanelContainer} className={'PanelContainer'}>
        {PanelHover}
        {this.props.panels.map(function(panel, i) {return <Panel focused={0} key={i} name={panel} onChange={self.handleChange} index={i} id={panel} clickPanelIndex={self.state.clickPanelIndex} sectionName={self.props.sectionName}></Panel>})}
      </div>
      );
  }
});

module.exports = PanelContainer;
