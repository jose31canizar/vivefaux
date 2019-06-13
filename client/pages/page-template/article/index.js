import React, { Component } from "react";
import Podcasts from "./podcasts";
import "./index.styl";

export default class PageTemplate extends Component {
  render() {
    const { className } = this.props;
    return <div className="page">{this.props.children}</div>;
  }
}
