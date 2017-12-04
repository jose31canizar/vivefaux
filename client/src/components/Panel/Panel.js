import React, { Component } from 'react'
import Cross from '../Cross'
import Parallax from '../Parallax/Parallax'
import './Panel.styl'
import SmoothScroll from '../SmoothScroll/SmoothScroll'

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelStyle: 'closed'
    }

    this.togglePanel = this.togglePanel.bind(this);
    this.togglePanelFromClick = this.togglePanelFromClick.bind(this)
  }
  togglePanelFromClick() {
    this.props.closeOtherPanels(this.props.index);
    this.togglePanel();
  }
  togglePanel() {
    console.log('closing panel inside ' + this.props.index);
    this.setState((prevState, props) => {
      var newPanelStyle;
      if(prevState.panelStyle === 'closed') {
        newPanelStyle = 'open';
      } else if(prevState.panelStyle === 'open') {
        newPanelStyle = 'closed';
      }
      // console.log(newPanelStyle);
      return {
        panelStyle: newPanelStyle
      }
    });
  }
  componentWillReceiveProps(props) {
    if (props.closePanel) {
      if(this.state.panelStyle == 'open') {
        console.log('closing panel ' + this.props.index);
        console.log(props.closePanel);
        console.log(this.state.panelStyle);
        this.togglePanel();
      }
    }
  }
  render() {
    var content;
    var self = this;
    if (this.state.panelStyle === 'open') {
      content = <div className='panel' >

      </div>
    }
    return (
        <SmoothScroll className={`panel`} to={this.props.title.toLowerCase()}>
          <div className={`left-panel ${this.state.panelStyle}`} onMouseDown={this.togglePanelFromClick}>
            <Cross panelStyle={this.state.panelStyle} togglePanel={this.togglePanel}/>
            <h3>{this.props.letter}</h3>
          </div>
          <div className={`left-panel-text ${this.state.panelStyle}`}>
            <h1>{self.props.title}</h1>
            <p>{self.props.description}</p>
            <div className='iframe-container'>
              <iframe width="100%" height="450" scrolling="no" frameBorder="no" src={self.props.soundcloud}>
              </iframe>
            </div>
          </div>
          <div className={`right-panel-text ${this.state.panelStyle}`} dangerouslySetInnerHTML={{__html: this.props.releases}}>
          </div>
        </SmoothScroll>
    );
  }
}

export default Panel;


// <div className='left-pane'>
//     <img src={require(`./../img/wallpaper/${self.props.wallpaper}.jpg`)} className='wallpaper'/>
//     <h1>{self.props.title}</h1>
//     <p>{self.props.description}</p>
//     <div className='iframe-container'>
//       <iframe width="100%" height="450" scrolling="no" frameBorder="no" src={self.props.soundcloud}>
//       </iframe>
//     </div>
// </div>
// <div className='right-pane' dangerouslySetInnerHTML={{__html: this.props.releases}}>
//</div>
