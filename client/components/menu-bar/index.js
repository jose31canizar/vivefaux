import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleSidebar } from "~/actions/navigation";
import "./index.styl";
import Link from "next/link";
import SignOutButton from "~/components/sign-out-button";

const Links = ({ pages, toggleSidebar }) =>
  pages.map(({ path, title }, i) => (
    <Link
      href={path}
      tabindex="-1"
      key={"page-link" + i}
      onClick={toggleSidebar}
    >
      <a>{title}</a>
    </Link>
  ));

class Menubar extends Component {
  render() {
    const { sidebar, toggleSidebar, pages } = this.props;

    return (
      <div
        className="menu-bar"
        style={{
          ...this.props.style,
          transform:
            sidebar === "open" ? "translate3d(0,0,0)" : "translate3d(300px,0,0)"
        }}
      >
        <div className="block-links">
          <h3>MENU</h3>
          <Links
            pages={[{ path: "dashboard", title: "Dashboard" }]}
            toggleSidebar={toggleSidebar}
          />
          <SignOutButton />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ navigation, pages }) => ({
    sidebar: navigation.sidebar,
    pages: pages.publicPages
  }),
  dispatch => bindActionCreators({ toggleSidebar }, dispatch)
)(Menubar);
