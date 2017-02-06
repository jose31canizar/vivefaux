var React = require('react');
var NavBar = require('./Navbar');
var Slider = require('./Slider');
var HeaderArrow = require('./HeaderArrow');

var Header = React.createClass({
    render: function () {
        return (
            <div className={'Header'}>
                <Slider></Slider>
                <NavBar sectionsArray={this.props.sectionsArray} className={'TopNavbar'}>
                  {this.props.children}
                </NavBar>
                <h1>ViveFaux</h1>
                <HeaderArrow />
            </div>
        );
    }
});

module.exports = Header;
