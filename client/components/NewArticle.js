import React, { Component } from 'react';
import axios from 'axios';

import Nav from "./Nav.js";
import Footer from "./Footer.js";

var querystring = require('querystring');

class NewArticle extends React.Component {
	constructor() {
		super();
		this.state = {
		    title: '',
		    content: '',
		    category: '',
		    messageFromServer: '',
            data: [],
		}

	    this.onClick = this.onClick.bind(this);
	    this.handleTextChange = this.handleTextChange.bind(this);
	    this.insertNewArticle = this.insertNewArticle.bind(this);
        this.getData = this.getData.bind(this);
	}

    componentDidMount() {
        this.getData(this);
    }

    getData(ev){
    axios.get('/getAll')
      .then(function(response) {
        ev.setState({data: response.data});
        console.log(response.data)
      });
    }

	onClick(e) {
      this.insertNewArticle(this);
      this.getData(this);
    }

insertNewArticle(e) {
    axios.post('/insert',
        querystring.stringify({
            title: e.state.title,
            content: e.state.content,
            category: e.state.category
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function(response) {
        e.setState({
            messageFromServer: response.data
        });
    })
}

handleTextChange(e) {
    if (e.target.name == "title") {
        this.setState({
            title: e.target.value
        });
    }
    if (e.target.name == "content") {
        this.setState({
            content: e.target.value
        });
    }

    if (e.target.name == "category") {
        this.setState({
            category: e.target.value
        });
    }
}

render() {
   	return (
   		<div>
        <Nav/>
	   		<label htmlFor="title">Title:</label>
	   		<input type="text" id="title" name="title" value={this.state.title} onChange={this.handleTextChange}></input>
	   		<label htmlFor="content">Content:</label>
	   		<input type="text" id="content" name="content" value={this.state.content} onChange={this.handleTextChange}></input>
	   		<label htmlFor="category">Category:</label>
	   		<input type="text" id="category" name="category" value={this.state.category} onChange={this.handleTextChange}></input>
        <button onClick={this.onClick}>Add New Article</button>
        {
          this.state.data.map(function(exp){
            return  (
              <div className="comment">
                <h2>{exp.title}</h2>
                <p>{exp.category}</p>
                <p>{exp.content}</p>
              </div>
            )
          })
        }
      <Footer title="Mentor Class React JS 2018"/>
   		</div>
   	);
}

}

export default NewArticle;







