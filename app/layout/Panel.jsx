import React, {Component} from 'react';
var SmoothScroll = require('./SmoothScroll');

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'Panel'
    }
    this.clickPanel = this.clickPanel.bind(this);
  }
  componentDidMount() {
    this.setState({
      style: 'Panel ' + this.props.className
    })
  }
  clickPanel(i) {
    console.log('clicked');
    this.props.onChange(i);
  }
  componentWillReceiveProps(newProps) {
    console.log('__________________________________________');
    console.log('click panel index ' + newProps.clickPanelIndex);
    console.log('panel index ' + newProps.index);
    console.log('a panel is open? ' + newProps.aPanelIsOpen);
    console.log('__________________________________________');
    if(newProps.index == newProps.clickPanelIndex && newProps.aPanelIsOpen) {
      console.log('opening!');
      this.state = {
        style: 'Panel ' + this.props.className + ' clicked' + (this.props.index + 1) + ''
      }
    } else {
      console.log("closing");
      this.state = {
        style: 'Panel ' + this.props.className + ' unclicked'
      }
    }
  }
  render() {

    var panelHoverColor = "#f25555";

    return (
      <div className={this.state.style} onMouseDown={this.clickPanel.bind(this, this.props.index)}>
        <SmoothScroll section={this.props.section}>
          {this.props.panel}
          </SmoothScroll>
      </div>

      );
  }
};

export default Panel;
