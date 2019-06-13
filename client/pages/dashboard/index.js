import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./index.styl";
import SVG from "~/components/svg";
import { loadPagesByPrivacy } from "~/actions/pages";
import Link from "next/link";
import Card from "~/components/card";
import Footer from "~/components/layout/footer";
import withAuthorization from "~/hocs/withAuthorization";

class Dashboard extends Component {
  // static async getInitialProps({}) {
  //   return { cards: Cards };
  // }
  async componentDidMount() {
    this.props.loadPagesByPrivacy(true);
  }
  render() {
    const { pages } = this.props;

    return (
      <div className="dashboard-container">
        <div className="dashboard">
          {pages &&
            pages.map(({ path, title, color, icon }, i) => (
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

// const authCondition = authUser => !!authUser;

// export default withAuthorization(authCondition)(Dashboard);
export default connect(
  ({ pages }) => ({ pages: pages.privatePages }),
  dispatch => bindActionCreators({ loadPagesByPrivacy }, dispatch)
)(Dashboard);
