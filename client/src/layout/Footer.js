import React from "react";
import { Link } from "react-router-dom";
import "./Footer.styl";
import * as routes from "../constants/routes";
const Footer = props => (
  <footer class="footer">
    <Link to={routes.LOG_IN} tabIndex="-1">
      Log Out
    </Link>
    <p>vivefaux</p>
  </footer>
);

export default Footer;
