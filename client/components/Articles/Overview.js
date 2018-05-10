import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const Overview = () => (
  <Modal trigger={<Button>Open Overview</Button>} closeIcon>
    <Modal.Header>Overview</Modal.Header>
    <Modal.Content image>
      <Image className='modal-img' src='images/ov-1.png' />
      <Modal.Description>
        <Header><h2>Why React?</h2></Header>
        <p>
            ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. React allows developers to create large web applications which can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It is used for handling the view layer (or user interfaces) of web applications. This corresponds to view in the MVC template. 
            At the heart of all React applications are components. Broadly speaking, to write React apps we write components that correspond to various interface elements. We then organize these components inside higher-level components which define the structure of our application. The components correspond to interface elements. React also allows us to create reusable UI components. 
        </p>
        <p>Applications built on ReactJS uses new technology that has not been used before in web application development. It is a perfect tool to make high-performance presentation layer for your application. And it can be even faster if you take the advantage of immutable data structures. As ReactJS features like components allow you to develop new features in React without rewriting existing code. There are plenty of Flux implementations you can choose from, including the brand new framework Relay. The Virtual DOM feature which was not present in Angular adds an extra advantage. Having such great performing features framework like React.js is the dream of many Web Application Development Companies. So, if you are dealing with real-time data then ReactJS is the best solution.</p>

        <h3>7 Top ReactJS Features Which Makes It Best For Development</h3>
        <dl> 
        <p>Let’s take a look at some of the key ReactJS Features that makes it stand out from the others.</p>
          <dt><b>Declarative</b></dt>
          <dd>React creates very interactive and dynamic user interface for websites and mobile applications. Create simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more readable and easier to debug.</dd>
        <br/>
          <dt><b>Virtual DOM</b></dt>
          <dd>In React, for every DOM object, there is a corresponding "virtual DOM object." A virtual DOM object is a representation of a DOM object, it creates a virtual copy of the original DOM. It's a one-way data binding hence manipulating the virtual DOM is quick rather than updating original DOM because nothing gets drawn onscreen.</dd>
        <br/>
          <dt><b>Event handling</b></dt>
          <dd>React creates its own event system which is fully compatible with W3C object model. All browser’native events are wrapped by instances of Synthetic Event. It provides a cross-browser interface to a native event. That means you do not need to worry about incompatible event names and fields. Besides, React event system is implemented through event delegation and also has a pool of event objects to reduce memory overhead.</dd>
        <br/>
          <dt><b>JSX</b></dt>
          <dd>JSX can best be thought of as a markup syntax that very closely resembles HTML.It is more or less like the combination of Javascript + XML. JSX makes writing React components, the building blocks of React UI, easier by making the syntax developers use for generating these strings of HTML almost identical to the HTML they will inject into the web page.JSX is one of best ReactJS features. Web developers will always go for an easy way out, which is why this is a great choice for many.</dd>
        <br/>
          <dt><b>Performance</b></dt>
          <dd>React uses one-way data binding with an application architecture called Flux controls.ReactJS helps us update the View for the user and, with Flux, can control the application workflow. Introducing virtual DOM adds advantages where it compares the new data with original DOM and automatically updates the view.</dd>
        <br/>
          <dt><b>React Native</b></dt>
          <dd>React Native is a custom renderer for React, just like React DOM on The Web. React Native uses native components instead of web components like React as building blocks. To begin with React Native, you need to know the basic React concepts, like JSX, components, state, and props. If you know React, you still need to learn stuff specific to React Native, like the native components. React Native also gives access to the features these platforms offer, apart from transforming React code to work on iOS and Android.</dd>
        <br/>
          <dt><b>Component-Based</b></dt>
          <dd>In React everything is component the web page divided into small components to create a view(or UIs). Every part of applications visuals would be wrapped inside a self-contained module known as a component. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.Components in ReactJS use to define the visuals and interactions in applications.</dd>     
        </dl>
      </Modal.Description>
    </Modal.Content>
    
  </Modal>
)

export default Overview;