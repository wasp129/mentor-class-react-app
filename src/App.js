import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from "./components/home.js";
import SecondPage from "./components/page2.js";
import ThirdPage from "./components/page3.js";
import PageFour from "./components/page4.js";

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/page2' component={SecondPage} />
        <Route path='/page3' component={ThirdPage} />
        <Route path='/page4' component={PageFour} />
      </Router>
    );
  }
}

export default App;


// App.js serves only as a routing engine. All components are in the components folder

