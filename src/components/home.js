import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from "../images/logo.svg";
import Asset1 from "../images/Asset1.png";
import Asset2 from "../images/Asset2.png";
import Asset3 from "../images/Asset3.png";
import { Input } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div>
        <Nav title="React Guide"/>
        {/* <Header title="React Guide"/> */} 
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    )
  }
}

//header element
class Nav extends Component {
  render() {
    return (
      <div className="nav container-full">
        <div className="nav-left">
          <img src={Logo} className="logo-nav" alt="logo react"/>
          <p className="logo-txt">{this.props.title}</p>
        </div>
        
        <ul className="nav-right" role="navigation">
          <li><Link className="link-menu" to="/">Home</Link></li>
          <li><Link className="link-menu" to="/page2">Documentation</Link></li>
          <li><Link className="link-menu" to="/page3">Tutorials</Link></li>

          <div className="ui mini icon input search">
            <input type="text" placeholder="Search..." />
            <i aria-hidden="true" className="search icon"></i>
          </div>
         </ul>
      </div>
    );
  }
}

const InputExampleLoadingWithoutIcon = () => (
  <Input size='mini' icon='search' placeholder='Search...' />
)


class Body extends Component {
  render() {
    return(
      <div className="body">
        <Header title="Do you React?"/>
        <Overview title="Overview"/> 
        <Tutorials title="Build your first app"/>
        <State/>
        <Clock/>
      </div>
    )
  }
}

// HEADER START 

class Header extends Component {
  render(){
    return (
      <div className="header container-full">
        <img src={Logo} className="logo" alt="logo react"/>
        <h1 className="headline">{this.props.title}</h1>
      </div>
    )
  }
}

//Petya OVERVIEW START
class Overview extends Component {
  render() {
    return (
      <div className="overview container-full">
      {/* <h1>{this.props.title}</h1> */} 
        <div className="row-3">
          <div className="column-3">
            <img src={Asset1} className="icons" alt="icon1"/>
            <h2>Introduction</h2>
            <p>This is the introduction. The aim of this website. To whom is it meant for. What does it contain. </p>
          </div>
          <div className="column-3">
          <img src={Asset2} className="icons" alt="icon2"/>
            <h2>Documentation</h2>
            <p>Introduction/explanation for the docs part. Prerequisits + Development etc. </p>
          </div>
          <div className="column-3">
          <img src={Asset3} className="icons" alt="icon3"/>
            <h2>Tutorials</h2>
            <p>What, how, for whom, Action part + Deployment etc. Full code on Github.  </p>
          </div>
        </div>
          <button>Get Started</button>
      </div>
    )
  }
}

class Tutorials extends Component {
  render() {
    return (
      <div className="tutorials container-full"> 
        <h2>{this.props.title}</h2>
        <div className="row-2">
        <div className="column-2">
        <h3>Tutorial 1</h3>
          <button>View Code</button>
        </div>
        <div className="column-2">
        <h3>Tutorial 2</h3>
          <button>View Code</button>
        </div>
        </div>

      </div>
    )
  }
}

class Footer extends Component{
	render() {
		return(
		<div className="footer">
    		<p>{this.props.title}</p>
		</div>
		)
	}
}


// EXAMPLES WITH STATE. A COUNTER, A DYNAMIC MESSAGE AND A CLOCK

const h2Style = {
  color: 'black'
};

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            message: "Gallant Fox"
        };
    }

    UpdateCount = () => {
        this.setState({ clicks: this.state.clicks + 1});
    }

    UpdateMessage = () => {
        this.setState({ message: "War admiral"});
    }

    render() {
        return (
            <div className="examples container-full" >
                <h2>Examples with state</h2>
                <h2 style={h2Style}>{this.state.clicks}</h2>
                <button onClick = {this.UpdateCount}>Click to count</button>
                <h2 style={h2Style}>{this.state.message}</h2>
                <button onClick = {this.UpdateMessage}>Update the message</button>
            </div>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="examples container-full" >
                <h2 style={h2Style}>The time is now: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Home;