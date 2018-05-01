import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input } from 'semantic-ui-react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

import Overview from './Articles/Overview';

// Dummy page for displaying how routing works
class SecondPage extends Component {
  render() {
    return(
      <div className="docs-page">
      	<Nav title="React Guide"/>
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    )
  }
};

//header element
class Nav extends Component {
  render() {
    return (
      <div className="nav container-full">
        <div className="nav-left">
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

class Body extends Component {
  render() {
    return(
      <div className="body">
        <Overview/>
      </div>
    )
  }
}

class Footer extends Component{
	render() {
		return(
		<div className="footer">
    		<h5>{this.props.title}</h5>
		</div>
		)
	}
}

export default SecondPage;
