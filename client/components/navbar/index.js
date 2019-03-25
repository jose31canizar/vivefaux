import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { loadPagesByPrivacy } from "~/actions/pages";
import Link from "next/link";
import { connect } from "react-redux";
import { compose } from "redux";
import NavLink from "~/components/active-link";
import { withRouter } from "next/router";
import "./index.styl";
import InputField from "../input-field";
import NavbarIcon from "../nav-bar-icon";
import SignOutButton from "~/components/sign-out-button";
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
  async componentDidMount() {
    this.props.loadPagesByPrivacy(false);
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
    const { width, pages } = this.props;
    if (width > 800) {
      return (
        <div>
          <div className="nav-bar">
            <Link href="/" tabIndex="-1">
              <h2 className="nav-bar-title">vivefaux</h2>
            </Link>
            <Link href={routes.CONTACT} tabIndex="-1">
              <label className="navbar-item">Contact</label>
            </Link>
            <div
              className="dropdown-trigger"
              onMouseOver={() => this.setState({ dropdown: true })}
              onMouseLeave={() => this.setState({ dropdown: false })}
            >
              <label className="dropdown-trigger-label">Music</label>
              {dropdown && (
                <div className="dropdown-items">
                  {pages &&
                    pages.map(({ path, title }, i) => (
                      <Link href={path} tabIndex="-1" className="navbar-item">
                        <label>{title}</label>
                      </Link>
                    ))}
                </div>
              )}
            </div>
            <NavLink
              activeClassName="active"
              href={routes.DASHBOARD}
              tabIndex="-1"
              className="navbar-logged-in-item"
            >
              <label>
                <FontAwesomeIcon icon="th" color="black" />
              </label>
            </NavLink>
            <div className="navbar-logged-in-items">
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
                    {pages &&
                      pages.map((page, i) => (
                        <option key={"option-" + i} value={page.path} />
                      ))}
                  </datalist>
                }
              />
              {/* <SignOutButton className="navbar-logged-in-item" /> */}
            </div>
            <NavLink
              activeClassName="active"
              href="/account"
              tabIndex="-1"
              className="navbar-logged-in-item"
            >
              <label>Account</label>
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-bar-mobile">
          <Link href="/" tabIndex="-1">
            <h2
              className={
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

export default compose(
  connect(
    ({ pages }) => ({ pages: pages.publicPages }),
    dispatch => bindActionCreators({ loadPagesByPrivacy }, dispatch)
  ),
  withRouter,
  withSize
)(Navbar);
