import React, { Component } from 'react';
import { Link } from 'react-router';
import Asset1 from "../images/Asset1.png";
import Asset2 from "../images/Asset2.png";
import Asset3 from "../images/Asset3.png";

import Nav from "./Nav.js";
import Footer from "./Footer.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    )
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
        <img src="../images/logo.svg" className="logo" alt="logo react"/>
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
            <p>Are you new to React and you are looking for the best place to start? Here you can find a systemathic and beginner friendly starters guide to help you learn the basics.</p>
          </div>
          <div className="column-3">
          <img src={Asset2} className="icons" alt="icon2"/>
            <h2>Documentation</h2>
            <p>In our documentation section you can find small articles about few of the basic concepts in React, from setting up your environment to building your first app. </p>
          </div>
          <div className="column-3">
          <img src={Asset3} className="icons" alt="icon3"/>
            <h2>Tutorials</h2>
            <p>Amonng the documentation you will find small code snippets and guidance how to start working with the React library. This web app serves as an introduction to the followng workshop. </p>
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

// EXAMPLES WITH STATE. A COUNTER, A DYNAMIC MESSAGE AND A CLOCK

// class State extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clicks: 0,
//             message: "Gallant Fox"
//         };
//     }

//     UpdateCount = () => {
//         this.setState({ clicks: this.state.clicks + 1});
//     }

//     UpdateMessage = () => {
//         this.setState({ message: "War admiral"});
//     }

//     render() {
//         return (
//             <div className="examples container-full" >
//                 <h2>Examples with state</h2>
//                 <h2 style={h2Style}>{this.state.clicks}</h2>
//                 <button onClick = {this.UpdateCount}>Click to count</button>
//                 <h2 style={h2Style}>{this.state.message}</h2>
//                 <button onClick = {this.UpdateMessage}>Update the message</button>
//             </div>
//         )
//     }
// }

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
                <h2>The time is now: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Home;