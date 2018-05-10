import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from "./components/Home.js";
import Documentation from "./components/Documentation.js";
import LoginPage from "./components/login.js";
import NewArticle from "./components/NewArticle.js";
import ToDoList from "./components/ToDoList.js";


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/Documentation' component={Documentation} />
        <Route path='/login' component={LoginPage} />
        <Route path='/NewArticle' component={NewArticle} />
        <Route path='/ToDoList' component={ToDoList} />
      </Router>
    );
  }
}

export default App;


// App.js serves only as a routing engine. All components are in the components folder

