import React, { Component } from "react";
import "./index.styl";

export default class NavbarIcon extends Component {
  state = {
    style: "menu-bar-icon unclicked"
  };
  toggleIcon() {
    this.setState((prevState, props) => {
      var newProp;
      if (prevState.style === "menu-bar-icon") {
        newProp = "menu-bar-icon open";
      } else {
        newProp = "menu-bar-icon";
      }
      return {
        style: newProp
      };
    });
  }
  componentWillReceiveProps(props) {
    if (props.sidebar === "open") {
      this.setState({ style: "menu-bar-icon open" });
    } else {
      this.setState({ style: "menu-bar-icon" });
    }
  }
  render() {
    const { style } = this.state;
    return (
      <div
        id="nav-icon"
        className={style}
        onMouseDown={this.props.toggleSidebar}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
}
