import React from "react";
import Link from "next/link";
import "./index.styl";
import * as routes from "~/constants/routes";

const Footer = props => (
  <footer class="footer">
    <Link href={routes.LOG_IN} tabIndex="-1">
      Log Out
    </Link>
    <p>vivefaux</p>
  </footer>
);

export default Footer;
