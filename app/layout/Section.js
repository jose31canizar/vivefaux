var React = require('react');
var NavBar = require('./Navbar');
var PanelContainer = require('./PanelContainer');
var SmoothScroll = require('./SmoothScroll');

var Section = React.createClass({
    render: function () {
        return (
            <div className={'SectionContainer'} id={this.props.name}>
              <div className={'Section'}>
                <h2>{this.props.name}</h2>
                  <PanelContainer sectionName={this.props.name} panels={this.props.panels}></PanelContainer>

                  <img src={'/app/images/' + this.props.sectionImage + '.jpg'} alt={this.props.sectionImage}/>
              </div>
            </div>
        );
    }
});

module.exports = Section;
