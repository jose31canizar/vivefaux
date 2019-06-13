import styled from "styled-components";

export const SplitPage = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  grid-auto-flow: column;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  flex-direction: column;

  & {
    @media all and (max-width: 64em) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-flow: row;
      overflow-y: scroll;
      padding: 5rem 0 0;
    }

    @media all and (max-width: 64em) {
      display: block;
      position: absolute;
    }
  }
`;
