import React, { Component } from 'react';
import Logo from "./react.svg";

class App extends Component {
  render() {
    return (
    	<div>
        <Nav title="React Guide"/>
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    );
  }
}

//header element
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={Logo} alt="Alt"/>
        <p className="title">{this.props.title}</p>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return(
      <div className="body">
        <Header title="This is the Header"/>
        <Overview title="Overview"/> 
        <Tutorials title="Tutorials"/>
      </div>
    )
  }
}

// HEADER START 

class Header extends Component {
  render(){
    return (
      <div className="header container-full">
        <h1 className="headline">{this.props.title}</h1>

      </div>
    )
  }
}

//HEADER STOP 


//Petya OVERVIEW START
class Overview extends Component {
  render() {
    return (
      <div className="overview container-full">
        <h1 className="headline">{this.props.title}</h1>
        <div className="row-3">
          <div className="column-3">
          <h3>Introduction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="column-3">
          <h3>About Documentation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="column-3">
          <h3>About Tutorials</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <button>Read more</button>
      </div>
    )
  }
}

//OVERVIEW STOP

//Petya TUTORIAL START

class Tutorials extends Component {
  render() {
    return (
      <div className="tutorials container-full"> 
        <h1 className="headline">{this.props.title}</h1>
        <div className="row-2">
        <div className="column-2">
          <p>Tutorial 1</p>
          <button>Read more</button>
        </div>
        <div className="column-2">
          <p>Tutorial 2</p>
          <button>Read more</button>
        </div>
        </div>

      </div>
    )
  }
}

//TUTORIAL STOP


// Svilena START

class Footer extends Component{
	render() {
		return(
		<div className="footer">
    		<p className="title">{this.props.title}</p>
		</div>
		)
	}
}

// Svilena STOP

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


