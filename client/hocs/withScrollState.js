import React, { Component } from "react";

const withScrollState = Component => {
  return class extends Component {
    state = {
      scrollTop: 0
    };
    componentDidMount() {
      // this.setState({ })
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};

export default withScrollState;
