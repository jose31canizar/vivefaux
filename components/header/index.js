import { Component } from "react";
import { Text, Box, SearchInput } from "~/components";
import { compose } from "~/helpers";
import { withSize } from "~/hocs";
import { BREAKPOINTS } from "~/constants";

class Header extends Component {
  state = {
    top: 0,
  };
  componentDidMount() {
    this.listener = window.addEventListener("scroll", this.findTop);
    this.findTop();
  }
  findTop = () => {
    let top;
    if (this.header) {
      top = window.pageYOffset;
    }
    this.setState({ top });
  };
  render() {
    const { top } = this.state;
    const { width } = this.props;
    const fontSize = Math.max(
      Math.min(640 / top, width < BREAKPOINTS.MOBILE ? 4 : 6),
      width < BREAKPOINTS.MOBILE ? 1.5 : 3
    );
    if (this.props.header === "hidden") {
      return null;
    }
    return (
      <Box
        padding={[1, 1, 1, 1]}
        margin={[19, 0, 0, 0]}
        width="100"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          transform: `translate3d(0, -${top < 220 ? top : 220}px, 0)`,
        }}
        ref={(r) => (this.header = r)}
        flex
        row
        bg="#000"
        acenter
      >
        <Text h1 width={50} fontSize={fontSize}>
          MAYU!
        </Text>
        <SearchInput
          width={width < BREAKPOINTS.MOBILE ? 60 : 50}
          bg={width < BREAKPOINTS.MOBILE ? null : "#000"}
        />
      </Box>
    );
  }
}

export default compose(withSize)(Header);
