import React from "react";
import { Spring } from "react-spring/renderprops.cjs";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export default function withFade(BaseComponent) {
  return function(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: isVisible ? 1 : 0 }}>
        {springProps => (
          <StyledDiv ref={domRef} style={props.style}>
            <BaseComponent {...props} style={springProps} />
          </StyledDiv>
        )}
      </Spring>
    );
  };
}
