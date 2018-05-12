import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const Components = () => (
  <Modal trigger={<Button>Components</Button>} closeIcon>
    <Modal.Header>React Components</Modal.Header>
    <Modal.Content image scrolling>
      <Image className='modalImg' src='images/logo.svg' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;Introduction to React Components and Props</h2></Header>
        <p>React Component is an independent, reusable code and it contains HTML  + Javascript. Components data will be stored in component's State. This state can be modified based on user action or other action. When a component state is changed React will re-render the component to the browser.</p>
        <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
        <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p>         
        <h3>Functional and Class Components</h3>
        <p>The simplest way to define a component is to write a JavaScript function:</p>
        <Image className='codeSnippet' src='images/func1.jpg' />
          <br/>
        <p>This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions.</p>
        <p>You can also use an <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'>ES6 class</a> to define a component:</p>
        <Image className='codeSnippet' src='images/func2.jpg' />
          <br/>
          <br/>
        <p>The above two components are equivalent from React’s point of view.</p> 
          <br/>
        <h3>Rendering a Component</h3>
        <p>React elements can represent DOM tags:</p>
        <Image className='codeSnippet' src='images/func3.jpg' />
        <br/>
        <p>However, elements can also represent user-defined components:</p>
        <Image className='codeSnippet' src='images/func4.jpg' />
        <br/>
        <p>When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.</p>          <br/>
        <h3>Composing Components</h3>
        <p>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components</p>
        <p>For example, we can create an App component that renders Welcome many times:</p>
        <Image className='codeSnippet' src='images/func6.jpg' />
          <br/>
        <p>Typically, new React apps have a single App component at the very top. To write React apps, we write components that correspond to interface elements. As we said before, when a component renders, it outputs the virtual representation of the HTML elements this component outputs.</p>
        <Image className='codeSnippet' src='images/func7.jpg' />
          <br/>
        <p>All React components require at least a render() function. This render() function is expected to return a virtual DOM representation of the browser DOM element(s).</p>
        <p>One of the requirements of JSX, <b>each component can only return one element</b>. That is why you will need wrap all your HTML markup into one containing HTML element eg. div or ul.</p>
        <Image className='codeSnippet' src='images/func8.jpg' />
          <br/>
          <br/>
        <p>One of the most interesting things React allows you to do is to use your custom React components inside another concept. </p>
        <Image className='codeSnippet' src='images/func9.jpg' />
        <Image className='codeSnippet' src='images/func10.jpg' />
          <br/>
        <p>This way you are able to compose more complex and useful user interface for your users. This feature also allow us to reuse component inside each other which encourages code reuse & easy to maintain code base.</p>
          <br/>
        <p>When a component is nested inside another component, it's called a child component. A component can have multiple children components. The component that uses a child component is called it's parent component.</p>
          <br/>
          <br/>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default Components
