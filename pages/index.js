import Head from "next/head";
import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { Grid, Header, Box, PurchasableAlbum } from "~/components";
import { compose } from "~/helpers";
import { withSize } from "~/hocs";
import Nav from "~/components/layout/nav-bar";

const StyledBox = styled(Box)`
  height: ${({ height }) => `${height}px` || "100vh"};
`;

class Home extends Component {
  render() {
    const { theme } = this.props;
    return (
      <main>
        <Head>
          <title>VIVEFAUX</title>
        </Head>
        <Nav />
        <StyledBox
          bg="#fff"
          scroll
          flex
          jcenter
          acenter
          width="100%"
          height={this.props.fullHeight}
        >
          <PurchasableAlbum />
        </StyledBox>
      </main>
    );
  }
}

export default compose(withTheme, withSize)(Home);
