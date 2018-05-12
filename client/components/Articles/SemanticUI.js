import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const SemanticUI = () => (
  <Modal trigger={<Button>SemanticUI</Button>} closeIcon>
    <Modal.Header>SemanticUI </Modal.Header>
    <Modal.Content image scrolling>
      <Image className='babel-large'  src='images/babel.png' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>What is Babel?</h2></Header>
        <p>Babel is essentially an ECMAScript 6 to ECMAScript 5 transpiler that includes the ability to compile JSX into regular JavaScript. In order to use ES6, it's best if we transpile our ES6 JavaScript into ES5 JavaScript to support more browsers. </p> 
        <h3>Installation</h3>
        <p>Babel comes packaged as an node module. Installation, as you might expect, is via npm:</p>
        <br/>
        <code className='code'>npm install --save-dev babel-cli</code>
        <br/>
        <p>To check - if it shows output, it’s successfully installed</p>
        <br/>
        <code className='code'>npm install --save-dev babel-cli</code>
        <br/>
        <br/>
        <p>Because we use this create-react-app tool we don't have to worry about it as it is been handled for us with the package installer.</p>        <br/>   
        <a href="https://babeljs.io/docs/setup/#installation">Link to official Babel installation documentation</a>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default SemanticUI
