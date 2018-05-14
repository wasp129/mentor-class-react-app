import React, { Component } from 'react';

class Clickcounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            message: "Gallant Fox"
        }
    }

    UpdateCount = () => {
        this.setState({ clicks: this.state.clicks + 1});
    }

	UpdateMessage = () => {
		this.setState({ message: "War admiral"});
   }

    render() {
        return (
            <div className="examples container-full" >
                <h2>Examples with state</h2>
                <h2>{this.state.clicks}</h2>
                <button onClick = {this.UpdateCount}>Click to count</button>
                <h2>{this.state.message}</h2>
                <button onClick = {this.UpdateMessage}>Update the message</button>
            </div>
        )
    }
}

export default Clickcounter;

