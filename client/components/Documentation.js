import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input } from 'semantic-ui-react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

import Nav from "./Nav.js";
import Footer from "./Footer.js";

import Overview from './Articles/Overview';
import Node from './Articles/Node';
import NPM from './Articles/NPM';
import JsxE6 from './Articles/JsxE6';

// Dummy page for displaying how routing works
class Documentation extends Component {
  render() {
    return(
      <div className="docs-page">
      	<Nav />
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
      </div>
    )
  }
};

class Body extends Component {
  render() {
    return(
      <div className="body">
        <Overview/>
        <Node/>
        <NPM/>
        <JsxE6/>
      </div>
    )
  }
}

export default Documentation;
