import React, { Component } from 'react';
import logo from './logo.png';



class App extends Component {
  render() {
    return (
      <div>
        <Header title="React Guide" />
        <Body/>
      </div>
    );
  }
}

//header element
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="React logo" />
        <p className="title">{this.props.title}</p>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Overview/> 
      </div>
    )
  }
}

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <h1 className="headline">THIS IS A HEADLINE</h1>
        <p>Introduction to React.</p>
      </div>
    )
  }
}


export default App;


/*
class Sidebar extends Component {
  render() {
    return (
    
    )
  }
}

class SidebarSteps extends Component { 
  render() {
    return(

    )
  }
}

//FOOTER COMPONENT

//arrays with objects
const prerequisits = [
  //collection of elements
  {
    step: "Overview",
    step: "Node.js",
    step: "Babel",
    step: "Git",
    step: "JSX/ES6",
    step: "Semantic UI"
  }
]

const development = [
  {
    step: "Hello world",
    step: "Complex" 
  }
]

const action = [
  {
    step: "Build a landingpage",
    step: "Build an article page",
    step: "Optional: To-do list with DB"
  }
]

const deployment = [
  {
    step: "Azure"
  }
]

console.log(prerequisits, development, action, deployment);

*/


