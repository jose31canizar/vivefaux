import React, {Component} from 'react';
import PanelContainer from './PanelContainer.jsx';
var SmoothScroll = require('./SmoothScroll');

class Section extends Component {
    render() {
        var sectionContainerStyle = {
          backgroundColor: '#f0f0f0',
          backgroundSize: "cover",
          zIndex: this.props.index
        };

        var sectionContainerFilter = {
          filter: "grayscale(10%) brightness(100%) contrast(90%)"
        }

        return (
            <div className={'SectionContainer'} style={Object.assign(sectionContainerStyle, sectionContainerFilter)} id={this.props.name}>
              <div className={'Section'} id={this.props.name}>
                <div className={'LeftSection'}>
                    <h2>{this.props.name}</h2>
                </div>
                  <PanelContainer
                    section={this.props.name}
                    panels={this.props.panels}>
                  </PanelContainer>
              </div>
            </div>
        );
    }
};

export default Section;
