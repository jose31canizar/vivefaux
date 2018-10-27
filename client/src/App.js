import React, { Component } from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/Contact";
import PasswordForget from "./components/password-forget/PasswordForget";
import Account from "./components/account/Account";
import Layout from "./layout/Layout";
import Pages from "./pages/Pages";
import NavPages from "./pages/NavPages";
import Article from "./pages/template/article";
import CustomPage from "./pages/template/custom";
import EditablePage from "./pages/template/editable";
import Display from "./pages/template/display";
import * as routes from "./constants/routes";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import withAuthentication from "./components/withAuthentication";

const timeout = 1000;

const findTransition = route => {
  switch (route) {
    case "/dashboard-container":
      return {
        classNames: findTransitionName(route),
        timeout: timeout
      };
    default:
      return {
        classNames: findTransitionName(route),
        timeout: timeout
      };
  }
};

const findTransitionName = route => {
  switch (route) {
    case routes.DASHBOARD:
      return "dashboard-container";
    default:
      return "transition";
  }
};

class App extends Component {
  state = {
    panelState: "closed",
    currentRoute: history.location.pathname,
    currentTransitionType: findTransition("/dashboard"),
    notification: null
  };
  componentDidMount() {
    history.listen(location => {
      this.setState({
        currentRoute: location.pathname,
        currentTransitionType: findTransition(location.pathname)
      });
    });
  }
  togglePanel = () => {
    this.setState((prevState, props) => ({
      panelState: prevState.panelState === "closed" ? "open" : "closed"
    }));
  };

  notify = t => {
    let text = t;
    switch (t) {
      case "save":
        text = "saved file";
        break;
      case "upload":
        text = "uploaded file";
        break;
      default:
        break;
    }
    this.setState({ notification: text });
    setTimeout(() => {
      this.setState({ notification: null });
    }, 1000);
  };

  render() {
    const { authenticate, togglePanel, notify } = this;
    const {
      panelState,
      currentRoute,
      currentTransitionType,
      notification
    } = this.state;

    return (
      <Router history={history}>
        <Layout
          panelState={panelState}
          togglePanel={togglePanel}
          notification={notification}
        >
          <Route
            render={({ location }) => (
              <TransitionGroup
                childFactory={child =>
                  React.cloneElement(child, currentTransitionType)
                }
              >
                <CSSTransition
                  timeout={timeout}
                  classNames={currentTransitionType}
                  key={location.pathname}
                >
                  <Switch location={location}>
                    {Pages.map((page, i) => (
                      <Route
                        key={i}
                        exact
                        path={`/${page.path}`}
                        panelState={this.state.panelState}
                        render={() =>
                          page.type === "markdown" ? (
                            <Article path={page.path} className={page.path} />
                          ) : page.type === "editable" ? (
                            <EditablePage
                              editing={page.editing}
                              path={page.path}
                              className={page.path}
                              notify={notify}
                            />
                          ) : (
                            <CustomPage
                              path={page.path}
                              className={page.path}
                            />
                          )
                        }
                      />
                    ))}
                    {NavPages.map(({ path, title }, i) => (
                      <Route
                        exact
                        path={`/${path}`}
                        panelState={panelState}
                        render={() => <Article path={path} title={title} />}
                      />
                    ))}
                    <Route
                      exact
                      path={routes.DASHBOARD}
                      panelState={panelState}
                      render={() => <Dashboard />}
                    />
                    <Route
                      exact
                      path={routes.LOG_IN}
                      panelState={panelState}
                      render={() => <Login />}
                    />
                    <Route
                      exact
                      path={routes.SIGN_UP}
                      panelState={panelState}
                      render={() => <Signup />}
                    />
                    <Route
                      exact
                      path={routes.PASSWORD_FORGET}
                      panelState={panelState}
                      render={() => <PasswordForget />}
                    />
                    <Route
                      exact
                      path={routes.ACCOUNT}
                      panelState={panelState}
                      render={() => <Account notify={notify} />}
                    />
                    <Route
                      exact
                      path={routes.CONTACT}
                      panelState={panelState}
                      render={() => <Contact />}
                    />
                    <Route
                      path="*"
                      panelState={panelState}
                      render={() => <Home />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Layout>
      </Router>
    );
  }
}

export default withAuthentication(App);
