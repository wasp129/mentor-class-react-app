import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const Node = () => (
  <Modal trigger={<Button>Node.js</Button>} closeIcon>
    <Modal.Header>What is Node.js?</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='large' src='images/node.png' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;Overview</h2></Header>
        <p>Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side. </p>
        <p>Node.js turns out to be quite useful for desktop applications in addition to servers. Also note that Node applications aren’t limited to pure JavaScript. You can use any language that transpiles to JavaScript, for example TypeScript and CoffeeScript. Node.js incorporates the Google Chrome V8 JavaScript engine, which supports ECMAScript 2015 (ES6) syntax without any need for an ES6-to-ES5 transpiler such as Babel. Much of Node’s utility comes from its large package library, which is accessible from the npm command. NPM, the Node package manager, is part of the standard Node.js installation </p>
        <p>Node.js is a package ecosystem and npm, is the largest ecosystem of open source libraries in the world. We have used it to install the modules we need to set up our React project. </p>
        <h3>Setup a React Project</h3>
        <p>To set up the React app you must first install the create-react-app package with the following command: </p>
        <code className='code'>npm install -g create-react-app</code>
        <br/><br/>
        <p>You can then access the create-react-app command to set up a starter premade environment for a React app: </p>
        <code className='code'>create-react-app my-first-app</code>
        <br/><br/>
        <p>To start up the app, you must first navigate to the root directory of the my-first-app folder you just created and use npm start: </p>
        <code className='code'>cd my-first-app</code>
        <br/>
        <code className='code'>npm start</code> 
        <br/><br/>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default Node
