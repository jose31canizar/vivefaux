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
  }
  togglePanel() {
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
  render() {
    var content;
    var self = this;
    if (this.state.panelStyle === 'open') {
      content = <div className='panel' >

      </div>
    }
    console.log(this.state.panelStyle);
    return (
        <div className={`panel`}>
          <div className={`left-panel ${this.state.panelStyle}`} onMouseDown={this.togglePanel}>
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
        </div>
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
