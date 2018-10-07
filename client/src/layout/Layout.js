import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Menubar from "./Menubar";
import Page from "../pages/template/PageTemplate";
import "./Layout.styl";

class Layout extends Component {
  render() {
    const { panelState, togglePanel, location, notification } = this.props;
    return (
      <div class="layout">
        {notification ? <p class="notification">{notification}</p> : null}
        <Navbar togglePanel={togglePanel} panelState={panelState} />
        <div
          class="content"
          style={{ marginLeft: panelState === "open" ? -300 : 0 }}
        >
          <Page className={location.pathname.substr(1)}>
            {this.props.children}
          </Page>
        </div>
        <div class="background-layer" />
        <Menubar panelState={panelState} togglePanel={togglePanel} />
      </div>
    );
  }
}

export default withRouter(Layout);
