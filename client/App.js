import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from "./components/Home.js";
import Documentation from "./components/Documentation.js";
import Login from "./components/Login.js";
import Forum from "./components/NewArticle.js";

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/Documentation' component={Documentation} />
        <Route path='/Login' component={Login} />
        <Route path='/Forum' component={Forum} />
      </Router>
    );
  }
}

export default App;


// App.js serves only as a routing engine. All components are in the components folder

