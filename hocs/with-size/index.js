import React, { Component } from "react";

export default function withSize(WrappedComponent) {
  return class extends Component {
    state = {
      width: null,
      height: null,
      fullHeight: null,
    };
    handleResize = () => {
      const height = Math.max(window.innerHeight || 0);
      const fullHeight = Math.max(document.body.clientHeight || 0);
      const width = Math.max(document.body.clientWidth, window.innerWidth || 0);
      this.setState({
        width,
        height,
        fullHeight,
      });
    };
    componentDidMount() {
      this.resizeListener = window.addEventListener("resize", () => {
        this.handleResize();
      });
      this.handleResize();
    }
    componentWillUnmount() {
      this.resizeListener && window.removeEventListener(this.resizeListener);
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}
