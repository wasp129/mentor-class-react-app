import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const Overview = () => (
  <Modal trigger={<Button>Open Overview</Button>} closeIcon>
    <Modal.Header>Overview</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='images/ov-1.png' />
      <Modal.Description>
        <Header><h2>Chapter 1</h2></Header>
        <p>
            ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. React allows developers to create large web applications which can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It is used for handling the view layer (or user interfaces) of web applications. This corresponds to view in the MVC template. 
        </p>
        <p>
            At the heart of all React applications are components. Broadly speaking, to write React apps we write components that correspond to various interface elements. We then organize these components inside higher-level components which define the structure of our application. The components correspond to interface elements. React also allows us to create reusable UI components. 
        </p>
        <h3>Why React?</h3>
        <dl> 
        <p>These are some of the benefits that React offers:</p>
          <dt><b>Simplicity</b></dt>
          <dd>- ReactJS is simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement but JSX is much easier to use.</dd>
          <br/>
          <dt><b>Easy to learn</b></dt>
          <dd>- Anyone with a basic previous knowledge in programming can easily understand React. For react you just need basic knowledge of CSS, HTML and JavaScript.</dd>
          <br/>
          <dt><b>Data Binding</b></dt>
          <dd>- React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It's easier to debug self-contained components of large ReactJS apps.</dd>
          <br/>
          <dt><b>Testability</b></dt>
          <dd>- ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.</dd>
        </dl>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Overview;