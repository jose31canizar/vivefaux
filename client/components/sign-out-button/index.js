import React from "react";
import { withRouter } from "next/router";
import Button from "../button";
import { LOG_IN } from "../../constants/routes";

const SignOutButton = ({ history, className }) => (
  <Button
    className={className}
    onClick={() => auth.doSignOut().then(() => history.push(LOG_IN))}
    onTouchEnd={() => auth.doSignOut().then(() => history.push(LOG_IN))}
  >
    <label>Sign Out</label>
  </Button>
);

export default withRouter(SignOutButton);
