import React, { Component } from 'react';
import Logo from "./react.svg";

class App extends Component {
  render() {
    return (
    	<div>
        <Header title="React Guide"/>
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    );
  }
}

//header element
class Header extends Component {
  render() {
    return (
      <div className="header">
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
        <Overview/>
      </div>
    )
  }
}

class Overview extends Component {
  render() {
    return (
      <div>
        <h1 className="headline">WELCOME TO THE FIRST DAY OF THE REST OF YOUR LIFE.</h1>
        <p>This is an introduction to React. We're going to have fun, learn some stuff, make money and get bitches.</p>
      </div>
    )
  }
}

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


