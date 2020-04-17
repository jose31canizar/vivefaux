import React from "react";
import Link from "next/link";
import { Box } from "~/components";
import styled from "styled-components";
import { findTag } from "~/helpers";

export const Links = [
  {
    href: "shop",
    label: "Shop",
  },
  {
    href: "about",
    label: "About",
  },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const StyledLink = styled(Box)`
  outline: none;
  color: #999;
  font-size: 0.75rem;
  letter-spacing: 0.04rem;

  &:hover {
    color: grey;
  }
`;

export const NextLink = ({ href, children, ...props }) => {
  return (
    <Link href={`/${href}`}>
      <StyledLink pointer as="a" {...props} tabIndex="-1">
        {children}
      </StyledLink>
    </Link>
  );
};
