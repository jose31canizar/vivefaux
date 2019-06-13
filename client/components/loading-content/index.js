import React, { Component } from "react";
import Box from "~/components/box";

export default class extends Component {
  render() {
    const { isLoading, spinner, children } = this.props;

    return <Box>{isLoading ? spinner : children}</Box>;
  }
}
