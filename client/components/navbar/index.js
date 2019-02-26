import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import "./index.styl";
import InputField from "../input-field";
import NavbarIcon from "../nav-bar-icon";
import SignOutButton from "../sign-out-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthUserContext from "../../AuthUserContext";
import * as routes from "../../constants/routes";
import withSize from "../withSize";

const links = [
  {
    href: "/subscribe",
    label: "Subscribe"
  },
  {
    href: "/auth/log-in",
    label: "Log In"
  },
  {
    href: "/auth/sign-up",
    label: "Sign Up"
  },
  {
    href: "/info/contact",
    label: "Contact"
  },
  {
    href: "/info/about",
    label: "About"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelState: this.props.panelState,
      query: "",
      dropdown: false
    };
  }
  onEnter = e => {
    const { history } = this.props;
    const { query, focused } = this.state;

    if (e.keyCode === 13 && focused) {
      history.push(query);
    }
  };

  render() {
    const { dropdown } = this.state;
    const { authUser, history, width } = this.props;
    console.log(width);
    if (width > 800) {
      return (
        <AuthUserContext.Consumer>
          {authUser => (
            <div class="nav-bar">
              <Link href={routes.HOME} tabIndex="-1">
                <h2 class="nav-bar-title">vivefaux</h2>
              </Link>
              <Link href={routes.CONTACT} tabIndex="-1" class="navbar-item">
                <label>Contact</label>
              </Link>
              <div
                class="dropdown-trigger"
                onMouseOver={() => this.setState({ dropdown: true })}
                onMouseLeave={() => this.setState({ dropdown: false })}
              >
                <label class="dropdown-trigger-label">Music</label>
                {dropdown && (
                  <div class="dropdown-items">
                    {[{ page: "asdf", title: "asdf" }].map(
                      ({ path, title }, i) => (
                        <Link href={path} tabIndex="-1" class="navbar-item">
                          <label>{title}</label>
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>

              {authUser ? (
                <div class="navbar-logged-in-items">
                  <InputField
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    placeholder="search"
                    label="filter"
                    field="query"
                    text="search your dashboard..."
                    setState={obj => this.setState(obj)}
                    datalistName="sections"
                    onClick={this.focusTextInput}
                    onTouchStart={this.focusTextInput}
                    datalist={
                      <datalist id="sections">
                        {[{ path: "asdf" }].map((page, i) => (
                          <option key={"option-" + i} value={page.path} />
                        ))}
                      </datalist>
                    }
                  />

                  <NavLink
                    href={routes.DASHBOARD}
                    tabIndex="-1"
                    class="navbar-logged-in-item"
                  >
                    <FontAwesomeIcon icon="th" color="black" />
                  </NavLink>
                  <SignOutButton className="navbar-logged-in-item" />
                  <NavLink
                    href="/account"
                    tabIndex="-1"
                    class="navbar-logged-in-item"
                  >
                    <label>Account</label>
                  </NavLink>
                </div>
              ) : null}
            </div>
          )}
        </AuthUserContext.Consumer>
      );
    } else {
      return (
        <div class="nav-bar-mobile">
          <Link href="/" tabIndex="-1">
            <h2
              class={
                this.props.panelState === "closed" ? "" : "hide-nav-bar-title"
              }
            >
              vivefaux
            </h2>
          </Link>
          <NavbarIcon
            togglePanel={this.props.togglePanel}
            panelState={this.props.panelState}
          />
        </div>
      );
    }
  }
}

export default withRouter(withSize(Navbar));
