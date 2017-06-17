import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Labels from './components/Labels';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/labels' component={Labels}/>
              <Route path='/contact' component={Contact}/>
              <Route path='*' component={Home}/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
