import React, { Component } from "react";
import { Spring } from "react-spring/renderprops.cjs";
import { Box, Text } from "~/components";

export default class extends Component {
  render() {
    return (
      <Box
        bg="#000"
        br={25}
        flex
        acenter
        jcenter
        pointer
        spacing={0.06}
        margin={[0.5, 0]}
        padding={[0.5, 1]}
        onClick={() => this.props.onClick(this.props.children)}
        className={this.props.className}
      >
        <Text color="white" h6>
          {this.props.children}
        </Text>
      </Box>
    );
  }
}
