import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const State = () => (
  <Modal trigger={<Button>State</Button>} closeIcon>
    <Modal.Header>State and Lifecycle</Modal.Header>
    <Modal.Content image scrolling>
      <Image className='modalImg' src='images/logo.svg' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;The State of things</h2></Header>
        <p>State is unique to your component. Every component has it’s own State where it store & retrieve data from.</p>
        <p>State in a component is intended to be completely internal to the Component and it's children (i.e. accessed by the component and and children it used). Similar to how we access props in a component, the state can be accessed via this.state in a component. Whenever the state changes (via the this.setState() function), the component will rerender.</p>
        
        <blockquote>
            <p><b> Note: State is another concept introduced by React and behaves a little bit differently from props. State is best described as how a component's data looks at a given point in time.</b></p>
            <p>&bull; State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component.</p> 
            <p>&bull; Normally components don’t have state and so are referred to as stateless. A <b>component using state is known as stateful</b>. So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast. </p>         
            <p>&bull; State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.</p>
        </blockquote>

        <p>In the ES6 class style, we can set the initial state of the component in the constructor() by setting this.state to a value. </p>
        <Image className='codeSnippet' src='images/state.jpg' />
        <p>The first line of the constructor should always call super(props). If you forget this, there will be errors.</p>
          <br/>
          <a href='https://reactjs.org/docs/state-and-lifecycle.html'> Read more about State here</a>
          <br/>
          <br/>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default State
