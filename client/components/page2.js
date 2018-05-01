import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input } from 'semantic-ui-react';
import { Accordion } from 'semantic-ui-react';

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
          <li><Link className="link-menu" to="/page3">Login</Link></li>

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
       
        <Sidebar/>
      </div>
    )
  }
}

class Sidebar extends Component {
	render(){
		return(
			<div className="sidebar">
			<AccordionExampleNested/>
			</div>
		);
	}
}

const InputExampleLoadingWithoutIcon = () => (
  <Input size='mini' icon='search' placeholder='Search...' />
)

{/*Accordeon start*/}
	const level1Panels = [
	  { title: 'Overview', content: 'Overview Contents' },
	  { title: 'Node.js', content: 'Node.js Contents' },
	  { title: 'Yarn', content: 'Yarns Contents' },
	  { title: 'Babel', content: 'Babel Contents' },
	  { title: 'Git', content: 'Git Contents' },
	  { title: 'JSX and ES6', content: 'JSX and ES6 Contents' },
	  { title: 'UI Components Semantic React', content: 'UI Components Semantic React Contents' },
	]

	const Level1Content = (
	  <div>
	    <p>Set up your environment</p>
	    <Accordion.Accordion panels={level1Panels} />
	  </div>
	)

	const level2Panels = [
	  { title: '“Hello world”', content: '“Hello world” Contents' },
	  { title: 'Complex components (Class, Functional) ', content: 'Complex components (Class, Functional)  Contents' },
	  { title: 'Props', content: 'Props Contents' },
	  { title: 'State', content: 'State Contents' },
	  { title: 'Routing', content: 'Routing Contents' },
	]

	const Level2Content = (
	  <div>
	    <p>Getting started</p>
	    <Accordion.Accordion panels={level2Panels} />
	  </div>
	)

	const level3Panels = [
	  { title: 'Build a landing page (Tutorial 1)', content: 'Build a landing page (Tutorial 1) Contents' },
	  { title: 'Build an article page (Tutorial 2)', content: ' Build an article page (Tutorial 2) Contents' },
	  { title: '(Optional) To-do list with DB', content: '(Optional) To-do list with DB Contents' },
	]

	const Level3Content = (
	  <div>
	    <p>Tutorials</p>
	    <Accordion.Accordion panels={level3Panels} />
	  </div>
	)

	const level4Panels = [
	  { title: 'Azure', content: 'Azure Contents' },
	]

	const Level4Content = (
	  <div>
	    <p>How to?</p>
	    <Accordion.Accordion panels={level4Panels} />
	  </div>
	)

	const rootPanels = [
	  { title: 'Prerequisites part', content: { content: Level1Content, key: 'content-1' } },
	  { title: 'Development part', content: { content: Level2Content, key: 'content-2' } },
	  { title: 'Action part', content: { content: Level3Content, key: 'content-3' } },
	  { title: 'Deployment', content: { content: Level4Content, key: 'content-4' } },
	]

	const AccordionExampleNested = () => (
	  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
	)

{/*Accordeon end*/}


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
