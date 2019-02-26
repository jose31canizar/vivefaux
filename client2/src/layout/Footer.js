import React from "react";
import { Link } from "react-router-dom";
import "./Footer.styl";
import * as routes from "../constants/routes";
import AuthUserContext from "../components/AuthUserContext";

const Footer = props => (
  <footer class="footer">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <Link to={routes.LOG_IN} tabIndex="-1">
            Log Out
          </Link>
        ) : (
          <Link to={routes.LOG_IN} tabIndex="-1">
            Log In
          </Link>
        )
      }
    </AuthUserContext.Consumer>
    <p>vivefaux</p>
  </footer>
);

export default Footer;
