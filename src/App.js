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

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="title">{this.props.title}</p>
        <img src={Logo} alt="Alt"/>
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

//ANDREAS START

// ANDREAS STOP


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

