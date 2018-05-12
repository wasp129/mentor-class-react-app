import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const Babel = () => (
  <Modal trigger={<Button>Babel</Button>} closeIcon>
    <Modal.Header>  Babel </Modal.Header>
    <Modal.Content image scrolling>
      <Image className='modalImg'  src='images/babel.png' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;What is Babel?</h2></Header>
        <p>Babel is essentially an ECMAScript 6 to ECMAScript 5 transpiler that includes the ability to compile JSX into regular JavaScript. In order to use ES6, it's best if we transpile our ES6 JavaScript into ES5 JavaScript to support more browsers. </p> 
        <h3>Installation</h3>
        <p>Babel comes packaged as an node module. Installation, as you might expect, is via npm:</p>
        <code className='code'>npm install --save-dev babel-cli</code>
        <br/>
        <br/>
        <p>To check - if it shows output, it’s successfully installed</p>
        <code className='code'>babel --help</code>
        <br/>
        <br/>
        <br/>
        <p>We can specify the path to the file we want to compile with babel (src/.app.js) with the command:</p>
        <code className='code'>babel src/app.js --out-file=public/scripts/app.js</code>
        <br/>
        <br/>
            <p>&bull; We specify here the path to the file we want to compile with babel (src/.app.js)</p>
            <p>&bull; We specify here the output file *(public/scripts/app.js) - the file that will be auto generated and overridden every time we save  new code in the (src/app.js file)</p>
        <br/>
        <br/>
        <code className='code'>babel src/app.js --out-file=public/scripts/app.js --watch</code>
        <br/>
        <br/>
            <p>&bull; This command will set up to watch our src/app.js for changes in the code and automatically create a new public/scripts/app.js file every time a change is detected</p>
            <p>&bull; We leave it running on the background</p>
            <p>&bull; To preview work - in different tab in npm we run live-server</p>
        <br/>
        <code className='code'>npm install -g babel-cli@6.24.1</code>
        <br/>
        <br/>
            <p>&bull; This command will install globally a specific version of babel.</p>
        <br/>
        <p>&#42;Because we use this create-react-app tool we don't have to worry about it as it is been handled for us with the package installer.</p>        
        <br/>   
        <a href="https://babeljs.io/docs/setup/#installation"><h4>Link to official Babel installation documentation</h4></a>
        <br/>
        <p>You can use the <a href="https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA">Babel REPL</a> to check what ES6 code compiles to.</p>
        <br/>
        <br/>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default Babel
