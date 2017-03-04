var React = require('react');
var NavBar = require('./Navbar');
var PanelContainer = require('./PanelContainer');
var SmoothScroll = require('./SmoothScroll');

var Section = React.createClass({
    render: function () {
        var sectionContainerStyle = {
          backgroundImage: 'url(/app/images/' + this.props.sectionImage + '.jpg)',
          backgroundSize: "cover"
        };

        return (
            <div className={'SectionContainer'} style={sectionContainerStyle} id={this.props.name}>
              <div className={'Section'}>
                <h2>{this.props.name}</h2>
                  <PanelContainer sectionName={this.props.name} panels={this.props.panels}></PanelContainer>
              </div>
            </div>
        );
    }
});

module.exports = Section;
