import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SmoothScroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
        negativeOffset: 0,
        timer: null,
        panelHeight: 0,
        height: 0
      }
      this.handleSectionClick = this.handleSectionClick.bind(this);
      this.stop = this.stop.bind(this);
      this.scrollTo = this.scrollTo.bind(this);
    }
    componentDidMount() {
      var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
      console.log(rect);
      this.setState({
        panelHeight: rect.height
      })
      const h = Math.max(document.body.clientHeight, window.innerHeight || 0)
      window.addEventListener('resize', () => {
        const h = Math.max(document.body.clientHeight, window.innerHeight || 0)
        this.setState({
          height: h
        })
      })
      this.setState({
        height: h
      })
    }
    render() {
        return (
          <div
            className={this.props.className}
            onMouseDown={this.handleSectionClick}>
            {this.props.children}
          </div>
        );
    }

    handleSectionClick() {
        // this.props.onMouseDown()
        // window.scrollTo(0, this.state.offset);
        this.scrollTo(this.props.to);

    }

    stop() {
        clearTimeout(this.state.timer);
    }

    scrollTo(id, callback) {
        var settings = {
            duration: 500,
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

        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        function step() {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.state.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.state.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                if(this.props.mobile) {
                  this.setState({
                    negativeOffset: 0
                  })
                }
                window.scrollTo(0, yScroll - this.state.negativeOffset);
                this.setState({
                  timer: setTimeout(step.bind(this), 10)
                })
            }
        }

        this.setState({
          timer: setTimeout(step.bind(this), 10)
        })
    }
}

export default SmoothScroll;
