import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import Logo from "./react.svg";

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={EntryPoint} />
        <Route path='/page2' component={SecondPage} />
        <Route path='/page3' component={ThirdPage} />
      </Router>
    );
  }
}

class EntryPoint extends Component {
  render() {
    return (
      <div>
        <Header title="React Guide"/>
        <Body/>
        <Tutorials/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    )
  }
}

//header element
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="Alt"/>
        <p className="title">{this.props.title}</p>
        <ul role="navigation">
          <li><Link to="/page2">Page two</Link></li>
          <li><Link to="/page3">Page three</Link></li>
        </ul>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return(
      <div className="body">
        <Overview title="Overview"/> 
      </div>
    )
  }
}

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

class Tutorials extends Component {
  render() {
    return (
      <div className="tutorials container-full"> 
        <h1 className="headline">Tutorials</h1>

      </div>
    )
  }
}

class Footer extends Component{
	render() {
		return(
		<div className="footer">
    		<p className="title">{this.props.title}</p>
		</div>
		)
	}
}

// Dummy page for displaying how routing works
class SecondPage extends Component {
  render() {
    return(
      <div className="newpage">
        <h1>THIS IS A NEW PAGE Y'ALL</h1>
      </div>
    )
  }
};

class ThirdPage extends Component {
  render() {
    return(
      <div className="newpage">
        <h1>THIS IS A THIRD PAGE! WHAT??!</h1>
      </div>
    )
  }
};


export default App;




