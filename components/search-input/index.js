import React, { Component } from "react";
import { Box } from "~/components";
import { Search } from "~/components/icons";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";
import { compose } from "~/helpers";
import { withRouter } from "next/router";

const StyledInput = styled.input`
  border: 0;
  background-color: ${({ bg }) => bg || "#000"};
  outline: none;
  border-bottom: 1px solid white;
  font-size: 1rem;
  height: 100%;
  color: white;
  margin-right: auto;
`;

class SearchInput extends Component {
  state = {
    open: false,
    text: "",
  };
  handleClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.router.push("/confirm-payment");
    }
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };
  render() {
    const { open } = this.state;
    const { width, bg } = this.props;
    return (
      <Box height="50px" row flex acenter jend width={width} pointer>
        <Spring
          from={{ width: "0%", padding: "0px" }}
          to={{
            width: open ? "100%" : "0%",
            padding: open ? "10px" : "0px",
          }}
        >
          {(props) => (
            <StyledInput
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              style={props}
              bg={bg}
              placeholder="¿Cuál es tu parada?"
            />
          )}
        </Spring>
        <Box padding={[0, 0, 0, 1]} onMouseDown={this.handleClick}>
          <Search />
        </Box>
      </Box>
    );
  }
}

export default compose(withRouter)(SearchInput);
