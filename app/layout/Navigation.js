var React = require('react');
var NavBar = require('./Navbar');

var Navigation = React.createClass({
    render: function () {
        return (
            <div className={'Navigation'}>
                <h2>Navigation</h2>
                <NavBar className={'BottomNavbar'}>
                    <h3 id="TravelInfo1">Kamakura</h3>
                    <h3 id="Booking1">Black Label</h3>
                    <h3 id="Safaris1">Soken Costa</h3>
                    <h3 id="Tours1">Collaborators</h3>
                </NavBar>
            </div>
        );
    }
});

module.exports = Navigation;
