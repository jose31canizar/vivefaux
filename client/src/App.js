import React, { Component } from "react";
import { BrowserRouter, Route, Switch, matchPath } from "react-router-dom";
import Home from "./components/Home/Home";
import Featured from "./components/Featured/Featured";
import Labels from "./components/Labels/Labels";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Layout from "./layout/Layout";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  onScroll(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div className="App" onScroll={this.onScroll}>
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <TransitionGroup component={Layout}>
                <AnimatedSwitch key={location.key} location={location}>
                  <Route
                    exact
                    path="/home"
                    render={props => <Home {...props} />}
                  />
                  <Route
                    exact
                    path="/featured"
                    render={props => <Featured {...props} />}
                  />
                  <Route
                    exact
                    path="/about"
                    render={props => <About {...props} />}
                  />
                  <Route
                    exact
                    path="/labels"
                    render={() => <Labels header={true} />}
                  />
                  <Route
                    exact
                    path="/contact"
                    render={props => <Contact {...props} />}
                  />
                  <Route exact path="*" render={props => <Home {...props} />} />
                </AnimatedSwitch>
              </TransitionGroup>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
