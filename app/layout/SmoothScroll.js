var React = require('react');

var smoothScroll = {
    timer: null,

    stop: function () {
        clearTimeout(this.timer);
    },

    scrollTo: function (id, callback) {
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset) :
            delta;

        startTime = Date.now();
        percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step() {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    }
};

var SmoothScroll = React.createClass({
    render: function () {
        return (
            <div className="smooth-scroll">
              <div className={this.props.className} style={this.props.style} onMouseDown={this.handleSectionClick}>
                  <h2>
                    {this.props.children}
                  </h2>
              </div>
            </div>
        );
    },

    handleSectionClick: function () {
        console.log('going to ' + this.props.section);
        smoothScroll.scrollTo(this.props.section);
    }
});

module.exports = SmoothScroll;
