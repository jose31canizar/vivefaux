var React = require('react');
var NavBar = require('./Navbar');
var PanelContainer = require('./PanelContainer');
var SmoothScroll = require('./SmoothScroll');
var Parallax = require('scroll-parallax');

var Section = React.createClass({
    componentDidMount : function() {
      var p = new Parallax('.parallax' + this.props.index, {
        offsetYBounds: 50,
        intensity: 32,
        center: 0.5,
        safeHeight: 0.55
      }).init();
    },
    render: function () {
        var sectionContainerStyle = {
          backgroundColor: '#f0f0f0',
          backgroundSize: "cover",
          zIndex: this.props.index
        };

                  // backgroundImage: 'url(images/' + this.props.sectionImage + '.jpg)',

        var sectionContainerFilter = {
          filter: "grayscale(10%) brightness(100%) contrast(90%)"
        }

        return (
            <div className={'SectionContainer'} style={Object.assign(sectionContainerStyle, sectionContainerFilter)} id={this.props.name}>
              <img className={'SectionImage parallax' + this.props.index} src={'images/' + this.props.sectionImage + '.jpg'}/>
              <div className={'Section'}>
                <h2>{this.props.name}</h2>
                  <PanelContainer sectionName={this.props.name} panels={this.props.panels}></PanelContainer>
              </div>
            </div>
        );
    }
});

module.exports = Section;
