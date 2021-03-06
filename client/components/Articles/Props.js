import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const Props = () => (
  <Modal trigger={
  <div className='polaroid'>
      <Button className='img-grid'>
      <Image className='img-grid-btn' src='images/logo.png'/>
        <div class="container-btn">
          <p className='headline'>8. Understanding Props</p>
        </div>
      </Button>
    </div>
  } closeIcon>
    <Modal.Header>Understanding Props in React</Modal.Header>
    <Modal.Content image scrolling>
      <Image className='modalImg' src='images/logo.svg' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;Props are Read-Only</h2></Header>
        <p>This simply is shorthand for properties. When you use any React component you can pass it some input data that you want it to work with. These properties are called "props" and are read-only values that define the basic starting point for a component.</p>
        <p>Thinking in React documentation, props are best explained as "a way of passing data from parent to child." That's it. In essence, props are just a communication channel between components, always moving from top (parent) to bottom (child). Props are similar to arguments for pure functions argument.</p>
        <p>For example, this code renders “Hello, Sara” on the page:</p>
        <Image className='codeSnippet' src='images/func5.jpg' />
        <br/>
          <br/>
        <p> Let’s recap what happens in this example: </p>
        <p>1. We call ReactDOM.render() with the &#60;Welcome name="Sara" /&#62; element. </p>
        <p>2. React calls the Welcome component with &#123;name&#58; &#39;Sara &#39; &#125; as the props.</p>
        <p>3. Our Welcome component returns a &#60;h1&#62;Hello, Sara&#60;/h1&#62; element as the result. </p>
        <p>4. React DOM efficiently updates the DOM to match &#60;h1&#62;Hello, Sara&#60;/h1&#62; </p>
        <blockquote>
            <p><b> Note: Always start component names with a capital letter.</b></p>
            <p>React treats components starting with lowercase letters as DOM tags. For example, &#60;div /&#62; represents an HTML div tag, but &#60;Welcome /&#62; represents a component and requires Welcome to be in scope.</p>
            <p>You can read more about the reasoning behind this convention <a href='https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized'> here</a>. </p> 
            <p>&bull; Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed. </p>         
            <p>&bull; Props make components reusable by giving components the ability to receive data from the parent component in the form of props.</p>
        </blockquote>
        <h3>Props & State</h3>
        <p>React uses a render method which you have seen above to hold component views. Component’s render method return JSX which then use to create real HTML output which will be rendered in the browser.</p>
        <p>The interesting thing about render method is that it runs every time when your component State or Props updates. This process ensures whenever you change your data using application logic component’s view update to show new data to users. By using this simple mechanism React allows us to build powerful and almost easy to manage UI components.</p>
        <p>Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:</p>
        <Image className='codeSnippet' src='images/prop1.jpg' />
          <br/>
        <p>Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs. </p>
        <p>In contrast, this function is impure because it changes its own input:</p>
        <Image className='codeSnippet' src='images/prop2.jpg' />
          <br/>
        <p>React is pretty flexible but it has a single strict rule:</p>
        <p><b>All React components must act like pure functions with respect to their props.</b></p>  
          <br/>
        <p>Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of “state”. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.</p>
          <br/>
          <br/>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default Props
