import React from "react";
import { withRouter } from "next/router";
import Button from "../button";

const SignOutButton = ({ history, className }) => (
  <Button
    className={className}
    onClick={() => console.log("clicked")}
    onTouchEnd={() => console.log("clicked")}
  >
    <label>Sign Out</label>
  </Button>
);

export default withRouter(SignOutButton);
