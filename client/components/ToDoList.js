import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from "./Nav.js";
import Footer from "./Footer.js";


class ToDoList extends Component {
	render() {
		return (
			<div className="docs-page">
		      	<Nav title="React Guide"/>
		        <Body/>
		        <Footer title="Mentor Class React JS 2018"/>
	     	 </div>
		)
	}
}

//Body element
class Body extends Component {
	render(){
		return (
			<div className="body">
			
			</div>
		)
	}
}

export default ToDoList;