import React, { Component } from 'react';
import items from "./items.js";

class RealTimeData extends Component {
  render() {
    return (
      <div>
        <Content items = {items} />
      </div>
    );
  }
}

class Content extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className="content">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    )
  }
}

var date = new Date();
var currenthours = date.getHours() * 3600;
var minutes = date.getMinutes() * 60;
var seconds = date.getSeconds();
var time = (currenthours + minutes + seconds);

class Item extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props;
    this.state = {
      currentTime: time  * item.value
    }
  }

  componentDidMount() {
    const {item} = this.props;
    this.timerID = setInterval(
      () => this.tick(),
      item.interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
      this.setState({
        currentTime: Math.round(this.state.currentTime + 1.4)
      })
  }

  render() {
    const {item} = this.props;
    return (
      <div>
        <h2>{item.platform}</h2>
        <p>{this.state.currentTime}</p>
      </div>
    )
  }
}

export default RealTimeData;