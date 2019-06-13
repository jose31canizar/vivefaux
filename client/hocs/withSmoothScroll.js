import React, { Component } from "react";

export default function withSmoothScroll(WrappedComponent) {
  return class extends Component {
    state = {
      timer: null
    };
    scrollToTop = (node, callback) => {
      var settings = {
        duration: 500,
        easing: {
          outQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          }
        }
      };
      var percentage;
      var startTime;

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
      var windowHeight = window.innerHeight;
      // var offset = window.pageYOffset;
      var offset = node.scrollTop;
      var delta = nodeTop - offset;
      var bottomScrollableY = height - windowHeight;
      var targetY =
        bottomScrollableY < delta
          ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
          : delta;
      startTime = Date.now();
      percentage = 0;

      const { timer } = this.state;

      console.log("offset", offset);

      if (timer) {
        clearInterval(timer);
      }

      function step() {
        var yScroll;
        var elapsed = Date.now() - startTime;

        if (elapsed > settings.duration) {
          clearTimeout(timer);
        }

        percentage = elapsed / settings.duration;

        if (percentage > 1) {
          clearTimeout(timer);

          if (callback) {
            callback();
          }
        } else {
          yScroll = settings.easing.outQuint(
            0,
            elapsed,
            offset,
            targetY,
            settings.duration
          );

          node.scrollTop = yScroll;
          this.setState({
            timer: setTimeout(step.bind(this), 10)
          });
        }
      }
      this.setState({
        timer: setTimeout(step.bind(this), 10)
      });
    };
    render() {
      return (
        <WrappedComponent {...this.props} scrollToTop={this.scrollToTop} />
      );
    }
  };
}
