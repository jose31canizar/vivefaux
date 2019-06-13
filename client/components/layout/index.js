import { Component } from "react";
import Nav from "~/components/nav-bar";
import Menubar from "~/components/menu-bar";
import Head from "../head";
import "./index.styl";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Head />
        <Nav />
        {this.props.children}
        <Menubar />
      </div>
    );
  }
}
