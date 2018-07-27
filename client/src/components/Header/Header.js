import React, { Component } from "react";
import "./Header.styl";

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <div className="logo">
          <img src={require("../../img/kamakura_vivefaux.svg")} />
          <h2>{title}</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
