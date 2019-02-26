import React, { Component } from "react";
import "./Dashboard.styl";
import SVG from "../../items/svg";
import Pages from "../../pages/Pages";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import PageTemplate from "../../pages/template/page";
import Footer from "../../layout/Footer";
import withAuthorization from "../withAuthorization";

class Dashboard extends Component {
  state = {
    name: "JOHN"
  };
  render() {
    const { name } = this.state;
    return (
      <div class="dashboard-container">
        <div class="header">
          {name && <h2 class="dashboard-header-title">Hi, {name}</h2>}

          <p class="explanation">
            Here's your collaborative and marketing dashboard.
          </p>
        </div>
        <div class="dashboard">
          {Pages.map(({ path, title, color, icon }, i) => (
            <Card
              path={path}
              title={title}
              color={color}
              icon={icon}
              key={"card-" + i}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Dashboard);
