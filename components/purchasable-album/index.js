import React, { Component } from "react";
import { Box, Text, Button } from "~/components";
import { Search } from "~/components/icons";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";
import { compose } from "~/helpers";
import { withRouter } from "next/router";
import { createPaymentIntent } from "~/api";
import AppStore from "~/stores/app";

const StyledBox = styled(Box)`
  position: relative;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const AlbumBox = styled(Box)`
  ${"" /* position: absolute; */}
`;

const PurchaseButton = styled(Button)`
  position: absolute;
  bottom: 0;
`;

class PurchasableAlbum extends Component {
  onClick = async () => {
    try {
      const result = await createPaymentIntent();
      AppStore.clientSecret = result.client_secret;
      this.props.router.push("/confirm-payment");
    } catch (error) {
      alert(
        "something went wrong with your payment attempt. Please contact vivefaux@gmail.com"
      );
    }
  };
  render() {
    const { width, bg } = this.props;
    return (
      <StyledBox
        width="150px"
        height="150px"
        flex
        acenter
        jcenter
        pointer
        column
        br={25}
      >
        <Spring
          from={{ transform: `translate3d(-100vw,0,0)` }}
          to={{ transform: `translate3d(0vw,0,0)` }}
        >
          {(props) => (
            <AlbumBox onClick={this.onClick} br={25} style={props}>
              <Text color="#000">MAYU!</Text>
            </AlbumBox>
          )}
        </Spring>
        <PurchaseButton onClick={this.onClick}>Purchase</PurchaseButton>
      </StyledBox>
    );
  }
}

export default compose(withRouter)(PurchasableAlbum);
