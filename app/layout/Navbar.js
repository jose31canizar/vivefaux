var React = require('react');
var SmoothScroll = require('./SmoothScroll');

var Navbar = React.createClass({
    render: function () {
        return (
            <div className={this.props.className}>
                <SmoothScroll Array={this.props.sectionsArray}>
                  {this.props.children}
                </SmoothScroll>
            </div>
        );
    }
});

module.exports = Navbar;
