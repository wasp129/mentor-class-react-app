import React, { Component } from 'react';

const HeaderElements = props => <p>{props.children}</p>;

class App extends Component {
  render() {
    return (
      <div className="header">
        <HeaderElements>Menu item 1</HeaderElements>
        <HeaderElements>Menu item 2</HeaderElements>
        <HeaderElements>Menu item 3</HeaderElements>
      </div>
    );
  }
}

export default App;