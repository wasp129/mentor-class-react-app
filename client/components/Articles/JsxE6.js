import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const JsxE6 = () => (
  <Modal trigger={<Button>JSX and ES6</Button>} closeIcon>
    <Modal.Header>Introducing JSX and ECMAScript</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='large' src='images/jsx.png' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>JSX/ES5/ES6 ??!</h2></Header>
        <p>ES6 (the ES stands for ECMAScript) is basically "regular JavaScript." The 5th update to JavaScript, ES5 was finalized in 2009. It has been supported by all major browsers for several years. Therefore, if you're written or seen any JavaScript in the recent past, chances are it was ES6.</p>
        <p>ES6 is a new version of JavaScript that adds some nice syntactical and functional additions. It was ﬁnalized in 2015. ES6 is almost fully supported (http://kangax.github.io/compat-table/es6/) by all major browsers. But it will be some time until older versions of web browsers are phased out of use. For instance, Internet Explorer 11 does not support ES6, but has about 11% of the browser market share. </p>
        <p>As we'll see, all of our React components have a render function that specifies that the HTML output of our React component will be. <b>JavaScript eXtension</b>, or more commonly JSX, is a React extension that allows us to write JavaScript that looks like HTML. </p>
        <h2>Why JSX?</h2>
        <p>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. </p>
        <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.</p>
        <p>React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>
        
        <h3>With that out of the way, let’s get started!</h3>
        <p>To see what this means, imagine we had a React component that renders an h1 HTML tag. JSX allows us to declare this element in a manner that closely resembles HTML: </p>
        <br/>
        <Image className='codeSnippet' src='images/render.jpg' />
        <br/>
        <p>It is one of the requirements of JSX that each component can only return one element. </p>
        <p>The render() function in the HelloWorld component looks like it's returning HTML, but this is actually JSX. The JSX is translated to regular JavaScript at runtime. That component, after translation, looks like this: </p>
        <Image className='codeSnippet' src='images/render2.jpg' />
        <br/>     
        <p>When a component renders, it outputs a tree of React elements or a virtual representation of the HTML elements this component outputs. React will then determine what changes to make to the actual DOM based on this React element representation. In the case of the HelloWorld component, the HTML that React writes to the DOM will look like this: </p>
        <Image className='codeSnippet' src='images/render3.jpg' />
        <br/>
        <p>The <b>class extends</b> syntax is used in our first React component is ES6 syntax. It allows us to write objects using a familiar Object-Oriented style. In ES6, the class syntax might be translated as:</p>
        <Image className='codeSnippet' src='images/render4.jpg' />
        <br/>
        <p>If we want to write pure JavaScript instead of rely on a JSX compiler, we can just write the React.createElement() function and not worry about the label of abstraction. But we like JSX. It's especially more readable with complex components.</p>
        <Image className='codeSnippet' src='images/render5.jpg' />
        <br/>
        <p>Because JSX is JavaScript it doesn’t allow us to use the <b>class</b> attribute for HTML tags. Instead, React gives us the attribute <b>className</b>. The reason we use className is because class is a reserved word in JavaScript. If we use class, we'll get an error in our console.</p>
        <br/>   

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default JsxE6
