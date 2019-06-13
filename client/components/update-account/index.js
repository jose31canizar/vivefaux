import React, { Component } from "react";
import Box from "~/components/box";

export default class extends Component {
  render() {
    const { className } = this.props;
    return (
      <Box style={{ height: "100vh" }}>
        <p>Vivefaux</p>
      </Box>
    );
  }
}
