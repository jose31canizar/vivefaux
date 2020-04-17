import React, { Component } from "react";
import styled from "styled-components";
import { findTag } from "~/helpers";

function spacing(value) {
  if (typeof value === "undefined" || value === null) {
    return "0";
  }
  if (value.length === 4) {
    const [v1, v2, v3, v4] = value;
    return `${v1}rem ${v2}rem ${v3}rem ${v4}rem`;
  }
  if (value.length === 2) {
    const [v1, v2] = value;
    return `${v1}rem ${v2}rem`;
  }
  return `${value}rem`;
}

const StyledText = styled.p`
  font-weight: ${({ bold }) => (bold ? 900 : 100)};
  color: ${({ color }) => color || "rgba(255, 255, 255, 0.9)"};
  ${({ width }) => (width ? `width: ${width}%` : "")};
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}rem` : "")};
  ${({ center }) => (center ? `text-align: center` : "")};
  ${({ spacing }) => (spacing ? `letter-spacing: ${spacing}rem` : "")};
  padding: ${({ padding }) => spacing(padding)};
`;

const tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

export default class extends Component {
  render() {
    return (
      <StyledText as={findTag(this.props, tags, "p")} {...this.props}>
        {this.props.children}
      </StyledText>
    );
  }
}
