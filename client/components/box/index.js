import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  flex-direction: column;
`;

export default Box;
