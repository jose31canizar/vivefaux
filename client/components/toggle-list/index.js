import * as React from "react";
import styled from "styled-components";
import { width } from "styled-system";
import ToggleSwitch from "~/components/toggle-switch";

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

const RoleRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  ${width}
`;

const RoleLabel = styled.div``;

const ToggleList = ({ data, handleToggle }) => (
  <Flex flexWrap="wrap">
    {Object.entries(data).map(([key, value]) => (
      <RoleRow width={[1, 1 / 2, 1 / 3]} bg="red" key={key}>
        <RoleLabel>{key}</RoleLabel>
        <ToggleSwitch
          toggle={value.value}
          handleToggle={() => handleToggle(key, value.value)}
        >
          {value.value.toString()}
        </ToggleSwitch>
      </RoleRow>
    ))}
  </Flex>
);

export default ToggleList;
