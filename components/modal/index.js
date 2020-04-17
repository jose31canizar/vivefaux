import React, { Component } from "react";
import { Box, Text, Button } from "~/components";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops.cjs";
import { withRouter } from "next/router";
import { withSize } from "~/hocs";
import { compose } from "~/helpers";
import { BREAKPOINTS } from "~/constants";

const StyledBox = styled(Box)`
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 3;
`;

class Modal extends Component {
  setDestination = (type) => {
    this.props.router.push("/confirm-payment");
  };
  render() {
    const { name, closeModal, width } = this.props;
    return (
      <Transition
        items={this.props.open}
        from={{ opacity: 0, scale: 0 }}
        enter={{ opacity: 0.5, scale: 1 }}
        leave={{ opacity: 0, scale: 0 }}
      >
        {(open) =>
          open &&
          (({ opacity, scale }) => (
            <StyledBox
              bg={`rgba(9,30,66,${opacity})`}
              width={100}
              flex
              jcenter
              acenter
              onMouseDown={this.handleClick}
            >
              <Box
                width={width < BREAKPOINTS.MOBILE ? 90 : 40}
                height="250px"
                flex
                column
                acenter
                jcenter
                bg="white"
                br={10}
                style={{ transform: `scale(${scale})` }}
                padding={[1, 1]}
              >
                <Box onClick={closeModal} padding={[0, 0, 2, 0]}>
                  <Text h6 color="#42526E">
                    cerrar
                  </Text>
                </Box>
                <Box padding={[0.5, 0, 2, 0]}>
                  <Text h3 color="black" bold center>
                    Hey {name},
                  </Text>
                  <Text h3 color="black" bold center>
                    ¿Cuál es tu rumbo, aluxioner?
                  </Text>
                </Box>
                <Box flex around width={width < BREAKPOINTS.MOBILE ? 100 : 70}>
                  <Button onClick={() => this.setDestination("home")}>
                    casa
                  </Button>
                  <Button onClick={() => this.setDestination("work")}>
                    aluxion
                  </Button>
                </Box>
              </Box>
            </StyledBox>
          ))
        }
      </Transition>
    );
  }
}

export default compose(withRouter, withSize)(Modal);
