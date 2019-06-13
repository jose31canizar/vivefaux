import React from "react";
import Link from "next/link";
import "./index.styl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CardLabel = styled("label")`
  box-shadow: 0 0 4px 1px rgba(231, 228, 228, 0.9);
  border-bottom-left-radius: 0.5rem
  border-bottom-right-radius: 0.5rem
  background: white
  padding: 0.4rem 0
  text-align: center
  margin-top: 0.5rem
`;

const CardContent = styled("div")`
    display: flex
    justify-content: center
    flex-direction: column
`;

const CardIcon = styled(FontAwesomeIcon)`
      padding: 2rem
      height: 100%
      margin: 0 auto
      border-top-left-radius: 0.5rem
      border-top-right-radius: 0.5rem
      box-shadow: 0 0 4px 1px rgba(231, 228, 228, 0.9);
      &::path
        fill: ${({ color }) => color}
`;

const Card = ({ path, icon, title, color }) => {
  return (
    <span className="card">
      <Link href={path} className="card-link" tabIndex="-1">
        <CardContent color={color}>
          <CardIcon icon={icon} color={color} />
          <CardLabel>{title}</CardLabel>
        </CardContent>
      </Link>
    </span>
  );
};
export default Card;
