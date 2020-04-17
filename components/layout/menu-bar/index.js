import React, { Component } from "react";
import Link from "next/link";
import { Box, NextLink, Links, Text } from "~/components";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops.cjs";

const StyledBox = styled(Box)`
  position: fixed;
  top: 5rem;
  left: 0;
  height: calc(100vh - 5rem);
`;

class Menubar extends Component {
  render() {
    return (
      <Transition
        items={this.props.show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(show) =>
          show &&
          ((props) => (
            <StyledBox
              width={100}
              bg="#000"
              style={props}
              flex
              column
              jstart
              acenter
            >
              {/* <h3>MENU</h3> */}
              <Box height={45} pt={10} column between flex jcenter acenter>
                {Links.map(({ href, label }) => (
                  <NextLink key={`nav-bar-link-${label}`} href={href}>
                    <Text h2>{label}</Text>
                  </NextLink>
                ))}
              </Box>
            </StyledBox>
          ))
        }
      </Transition>
    );
  }
}

export default Menubar;
