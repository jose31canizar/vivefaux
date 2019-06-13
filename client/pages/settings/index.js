import * as React from "react";
import { render } from "react-dom";
import ToggleList from "~/components/toggle-list";
import styled, { ThemeProvider } from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from "styled-system";

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  }
};

export const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
);

export const Flex = styled(Box)(
  {
    display: "flex"
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

export default class extends React.Component {
  state = {
    isAuthor: { value: false },
    isClient: { value: false },
    isCoOwner: { value: false },
    isCommissionary: { value: false },
    isContact: { value: false }
  };
  handleToggle = (key, value) => {
    console.log(key, value);
    this.setState({ [key]: { value: !value } });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ToggleList data={this.state} handleToggle={this.handleToggle} />
      </ThemeProvider>
    );
  }
}
