import React, { Component } from "react";
import { Image, Text, Box } from "~/components";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default class extends Component {
  render() {
    const { name } = this.props;
    return <StyledImage src={`/static/images/${name}.png`} />;
  }
}
