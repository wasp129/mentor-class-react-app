import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react'

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


//header element
class Nav extends Component {
  render() {
    return (
      <div className="nav container-full">
        <div className="nav-left">
          <img src="../images/logo.svg" className="logo-nav" alt="logo react"/>
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


//Body element
class Body extends Component {
	render(){
		return (
			<div className="body">
			<div className="formContainer">
				<LoginForm/>
				<h4>You don't have an account? 
				<a className="textHightlight"><Link to="page4"> Register here</Link></a>
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
//Footer element
class Footer extends Component {
	render(){
		return(
			<div className="footer">
    			<h5>{this.props.title}</h5>
			</div>
		)
	}
}
export default ThirdPage;