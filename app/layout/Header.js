var React = require('react');
var NavBar = require('./Navbar');
var Slider = require('./Slider');
var HeaderArrow = require('./HeaderArrow');

var Header = React.createClass({
    render: function () {
        return (
            <div className={'Header'}>
                <Slider></Slider>
                <NavBar className={'TopNavbar'} goTo={'Welcome'}>
                    <h3 id="TravelInfo">Kamakura</h3>
                    <h3 id="Booking">Black Label</h3>
                    <h3 id="Safaris">Soken Costa</h3>
                    <h3 id="Tours">Collaborators</h3>
                </NavBar>
                <h1>ViveFaux</h1>
                <HeaderArrow />
            </div>
        );
    }
});

module.exports = Header;
