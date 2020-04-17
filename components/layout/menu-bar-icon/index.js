import React, { Component } from "react";
import { Box } from "~/components";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";

const Line = styled.div`
  width: 2px;
  height: 21px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const StyledBox = styled(Box)`
  transform: rotate3d(0, 0, 1, 90deg);
  z-index: 4;
`;

export default class extends Component {
  state = {
    parallel: "translate3d(0px,0,0) rotate3d(0, 0, 1, 0deg)",
    crossOne: "translate3d(5px,0,0) rotate3d(0, 0, 1, 45deg)",
    crossTwo: "translate3d(-5px,0,0) rotate3d(0, 0, 1, -45deg)",
    open: false
  };
  handleClick = () => {
    const { onClick } = this.props;
    onClick();
    this.setState(({ open }) => ({ open: !open }));
  };
  render() {
    const { crossOne, crossTwo, parallel, open } = this.state;
    return (
      <Box width="25px" height="25px" flex jcenter acenter onMouseDown={this.handleClick}>
        <StyledBox width="12px" height="25px" row flex between>
          <Spring
            from={{ transform: crossOne }}
            to={{ transform: open ? crossOne : parallel }}
          >
            {props => <Line style={props} />}
          </Spring>
          <Spring
            from={{
              transform: crossTwo
            }}
            to={{
              transform: open ? crossTwo : parallel
            }}
          >
            {props => <Line style={props} />}
          </Spring>
        </StyledBox>
      </Box>
    );
  }
}
