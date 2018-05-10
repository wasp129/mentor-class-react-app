import React, { Component } from 'react';

class Footer extends Component{
	render() {
		return(
		<div className="footer">
    		<p>{this.props.title}</p>
		</div>
		)
	}
}

export default Footer;