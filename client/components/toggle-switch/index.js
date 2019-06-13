import * as React from "react";
import styled from "styled-components";

const Switch = styled.button`
  position: relative;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  appearance: none;
  outline: none;
  background-color: grey;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #94b9f0;
    opacity: ${({ toggle }) => (toggle ? 1 : 0)};
    transition: opacity 0.25s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    transition: transform 0.15s ease-out;
    width: 46px;
    height: 95%;
    border-radius: 23px;
    background-color: white;
    transform: ${({ toggle }) =>
      toggle ? "translate(2px,0)" : "translate(-48px,0)"};
  }
`;

const ToggleSwitch = ({ toggle, handleToggle }) => (
  <Switch toggle={toggle} aria-pressed={toggle} onClick={handleToggle} />
);

export default ToggleSwitch;
