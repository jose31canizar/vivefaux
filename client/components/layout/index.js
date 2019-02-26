import { Component } from "react";
import Nav from "../navbar";
import Head from "../head";
import "./index.styl";

export default class Layout extends Component {
  render() {
    return (
      <div class="layout">
        <Head />
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
