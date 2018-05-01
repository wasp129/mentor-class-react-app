import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from "../images/logo.svg";
import { Button, Checkbox, Form } from 'semantic-ui-react'

class PageFour extends Component {
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
          <img src={Logo} className="logo-nav" alt="logo react"/>
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
				<h4>Go back to
        <a className="textHightlight"><Link to="page3"> Login</Link></a>
        </h4>
			</div>
			</div>
		)
	}
}

const LoginForm = () => (
  <Form className="loginForm">
  	<h1>Register</h1>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' name="name"/>
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' name="email"/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' name="password"/>
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input placeholder='Confirm Password' name="password"/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
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

export default PageFour;
