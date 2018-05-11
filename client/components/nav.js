import React, { Component } from 'react';
import { Link } from 'react-router';
import Asset1 from "../images/Asset1.png";
import Asset2 from "../images/Asset2.png";
import Asset3 from "../images/Asset3.png";

//header element
class Nav extends Component {
  render() {
    return (
      <div className="nav container-full">
        <div className="nav-left">
          <img src="../images/logo.svg" className="logo-nav" alt="logo react"/>
          <p className="logo-txt">React Guide</p>
        </div>
        
        <ul className="nav-right" role="navigation">
          <li><Link className="link-menu" to="/">Home</Link></li>
          <li><Link className="link-menu" to="/Documentation">Documentation</Link></li>
          <li><Link className="link-menu" to="/NewArticle">New article</Link></li>
          <li><Link className="link-menu" to="/login">Log in</Link></li>
          <li><Link className="link-menu" to="/ToDoList">To-do</Link></li>


          <div className="ui mini icon input search">
            <input type="text" placeholder="Search..." />
            <i aria-hidden="true" className="search icon"></i>
          </div>
         </ul>
      </div>
    );
  }
}

export default Nav;