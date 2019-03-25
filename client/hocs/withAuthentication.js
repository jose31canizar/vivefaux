import React from "react";

const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };
    componentDidMount() {
      // firebase.auth.onAuthStateChanged(authUser => {
      //   authUser
      //     ? this.setState({ authUser })
      //     : this.setState({ authUser: null });
      // });
    }
    render() {
      return <Component {...this.state} />;
    }
  };

export default withAuthentication;
