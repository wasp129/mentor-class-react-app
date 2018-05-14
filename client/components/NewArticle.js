import React, { Component } from 'react';
import axios from 'axios';
import { Divider, Segment } from 'semantic-ui-react';
import { Parallax, Background } from 'react-parallax';


import Nav from "./Nav.js";
import Footer from "./Footer.js";

var querystring = require('querystring');

class Forum extends React.Component {
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
        <Nav title="Forum"/>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require('../images/bgr2.png')}
          bgImageAlt="bgr"
          strength={200}
        >
          <div className="text-input">
          <h2>Leave a comment, and tell us what you think.</h2>
          <input type="text" id="title" name="title" value={this.state.title} placeholder="Title" onChange={this.handleTextChange}></input>
          <input type="text" id="category" name="category" value={this.state.category} placeholder="Subject" onChange={this.handleTextChange}></input>
          <br/><br/>
          <textarea type="text" id="content" name="content" value={this.state.content} placeholder="Content" onChange={this.handleTextChange}></textarea>
          <br/><br/>
          <button className="forum-submit" onClick={this.onClick}>Submit</button>
        </div>
          <div style={{ height: '80px' }} />
        </Parallax>
        
        {
          this.state.data.map(function(exp){
            return  (
              <div className='articles'>
              <Segment className="comment">
                <div>
                  <img src="../images/logo.svg" className="default" alt="logo react"/>
                </div>
                <div>
                  <h2 className="forum-title">{exp.title}</h2>
                  <p className="forum-subject">{exp.category}</p>
                  <p className="forum-content">{exp.content}</p>
                </div>
                <br/>
              </Segment>
              </div>
            )
          })
        }
      <Footer title="Mentor Class React JS 2018"/>
   		</div>
   	);
}

}

export default Forum;







