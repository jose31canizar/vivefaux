var React = require('react');
var SmoothScroll = require('./SmoothScroll');

var HeaderArrow = React.createClass({
    render: function () {
        return (
            <div className={'HeaderArrow'}>
                <SmoothScroll goTo={'Welcome'}>
                    <h3>
                        <svg viewBox="0 0 100 50">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100" height="50">
                                    <rect x="0" y="0" width="100" height="40" fill="#fff"/>
                                    <text textAnchor="middle" x="50" y="32" dy="1" fontFamily="Futura"
                                          fontSize="49">&#8964;</text>
                                </mask>
                            </defs>
                            <circle fill="white" cx="50" cy="20" r="20" mask="url(#mask)" fillOpacity="0.9"/>
                        </svg>
                    </h3>
                </SmoothScroll>
            </div>
        );
    }
});

module.exports = HeaderArrow;
