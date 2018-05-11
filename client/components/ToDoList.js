import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from "./Nav.js";
import Footer from "./Footer.js";

const app = {
	title: 'To-do list',
	subtitle: 'Put your life in our hands',
	options: []
};

//ADD OPTION
const onFormSubmit = (e) => {
	//avoid default full page refresh:
	e.preventDefault();
	//elements are index by the 'name' attribute
	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

//REMOVE ALL
const onRemoveAll = () => {
	app.options = [];
	render();
};

//GENERATE A RANDOM NUMBER
const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};


class ToDoList extends Component {
	render() {
		return (
			<div>
				<h1>{app.title}</h1> 
				{app.subtitle && <p>{app.subtitle}</p>} 
				<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
				<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
				<button onClick={onRemoveAll}>Remove All</button>
				{
					
				}
				<ol>
					{
						app.options.map((option) => <li key={option}>{option}</li>)
					}		
				</ol>
				<form onSubmit={onFormSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		)
	}
}


export default ToDoList;
