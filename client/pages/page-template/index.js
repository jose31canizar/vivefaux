import React, { Component } from "react";
import "./index.styl";
import Link from "next/link";
import Podcasts from "~/pages/page-template/podcasts";

export default class PageTemplate extends Component {
  async componentDidMount() {}
  render() {
    const { title } = this.props;
    return <Podcasts />;
  }
}
