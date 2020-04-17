import React from "react";
import Link from "next/link";
import "./index.styl";
import styled from "styled-components";
import { Box } from "~/components";

const StyledFooter = styled.footer`
  ${Box}
  padding 5rem
  width 100%
  grid-column 1 / 3
`;

const Footer = props => (
  <StyledFooter>
    <p>vivefaux</p>
  </StyledFooter>
);

export default Footer;
