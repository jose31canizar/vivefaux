var React = require('react');
var SmoothScroll = require('./SmoothScroll');

var Navbar = React.createClass({
    render: function () {
        return (
            <div className={this.props.className}>
                {React.Children.map(this.props.children, (child) => (
                    <button id="top">{child}</button>))}
            </div>
        );
    }
});

module.exports = Navbar;
