import React, { Component } from "react";
import Box from "~/components/box";

export default class extends Component {
  render() {
    const { className } = this.props;
    return (
      <Box style={{ height: "100vh" }}>
        <p>
          ViveFaux is a collection of art creators founded by Thomas Canizares
          in 2014.
        </p>
      </Box>
    );
  }
}
