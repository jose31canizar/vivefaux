import React, { Component } from "react";
import "./Menubar.styl";
import Pages from "../pages/Pages";
import NavPages from "../pages/NavPages";
import { Link } from "react-router-dom";
import SignOutButton from "../components/signout/SignOutButton";
import AuthUserContext from "../components/AuthUserContext";

const Links = ({ pages, togglePanel }) =>
  pages.map((link, i) => (
    <Link
      to={link.path}
      tabIndex="-1"
      key={"page-link" + i}
      onClick={togglePanel}
    >
      {link.title}
    </Link>
  ));

export default class Menubar extends Component {
  render() {
    const { panelState, togglePanel } = this.props;
    return (
      <div
        class="menu-bar"
        style={{
          ...this.props.style,
          transform:
            panelState === "open"
              ? "translate3d(0,0,0)"
              : "translate3d(300px,0,0)"
        }}
      >
        <div class="block-links">
          <h3>MENU</h3>
          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? (
                <Links
                  pages={[
                    { path: "dashboard", title: "Dashboard" },
                    ...NavPages,
                    ...Pages
                  ]}
                  togglePanel={togglePanel}
                />
              ) : (
                <Links pages={NavPages} togglePanel={togglePanel} />
              )
            }
          </AuthUserContext.Consumer>

          <SignOutButton />
        </div>
      </div>
    );
  }
}
