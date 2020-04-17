import React, { Component } from "react";
import { Image, Text, Box } from "~/components";
import { withFade } from "~/hocs";
import styled from "styled-components";

class Card extends Component {
  render() {
    const { image, name, title, style, onClick } = this.props;
    return (
      <Box
        jcenter
        astart
        width="100px"
        flex
        column
        pointer
        style={style}
        onClick={this.props.onClick}
      >
        <Image name={image} />
        <Box padding={[1, 0]}>
          <Text h4 bold>
            {name}
          </Text>
          <Text h5 color="#8993A4">
            {title}
          </Text>
        </Box>
      </Box>
    );
  }
}

export default withFade(Card);
