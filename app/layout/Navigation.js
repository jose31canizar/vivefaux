var React = require('react');
var NavBar = require('./Navbar');

var Navigation = React.createClass({
    render: function () {
        return (
            <div className={'Navigation'}>
                <h2>Navigation</h2>
                <NavBar className={'BottomNavbar'} sectionsArray={this.props.sectionsArray}>
                    {this.props.children}
                </NavBar>
            </div>
        );
    }
});

module.exports = Navigation;
