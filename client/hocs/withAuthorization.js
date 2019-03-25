import React from "react";
import { withRouter } from "next/router";
import * as routes from "~/constants/routes";

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      // firebase.auth.onAuthStateChanged(authUser => {
      //   if (!authCondition(authUser)) {
      //     this.props.history.push(routes.LOG_IN);
      //   }
      // });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
