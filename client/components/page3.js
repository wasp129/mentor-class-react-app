import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import Nav from "./Nav.js";
import Footer from "./Footer.js";


class ThirdPage extends Component {
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

//Body element
class Body extends Component {
	render(){
		return (
			<div className="body">
			<div className="formContainer">
				<LoginForm/>
				<h4>You don't have an account? 
				<a className="textHightlight"><Link to="/page4"> Register here</Link></a>
				</h4>
			</div>
			</div>
		)
	}
}

const LoginForm = () => (
  <Form className="loginForm">
  	<h1>Login</h1>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' name="email"/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' name="password"/>
    </Form.Field>
    <button className="button" type='submit'>Submit</button>
  </Form>
)

export default ThirdPage;