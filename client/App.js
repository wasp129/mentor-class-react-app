import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from "./components/Home.js";
import Documentation from "./components/Documentation.js";
import ThirdPage from "./components/page3.js";
import NewArticle from "./components/NewArticle.js";

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/Documentation' component={Documentation} />
        <Route path='/page3' component={ThirdPage} />
        <Route path='/NewArticle' component={NewArticle} />
      </Router>
    );
  }
}

export default App;


// App.js serves only as a routing engine. All components are in the components folder

