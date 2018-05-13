import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const SemanticUI = () => (
  <Modal trigger={
  <div className='polaroid'>
      <Button className='img-grid'>
      <Image className='img-grid-btn' src='images/semantic.png'/>
        <div class="container-btn">
          <p className='headline'>6. UI Components Semantic React </p>
        </div>
      </Button>
    </div>
  } closeIcon>
    <Modal.Header> UI Components Semantic React </Modal.Header>
    <Modal.Content image scrolling>
      <Image className='modalImg' src='images/semantic.png' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;Introduction to Semantic-UI-React integration</h2></Header>
        <p>Semantic UI is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience. </p> 
        <h3>Usage</h3>
        <p>To start using the Semantic UI components in your project install the package via Npm:</p>
        <code className='code'> npm install semantic-ui</code>
          <br/>
          <br/>
          <br/>
        <p>Installing Semantic UI React provides the JavaScript for your components. You'll also need to include a stylesheet to provide the styling for your components. This is the typical pattern for component frameworks, such as Semantic UI or Bootstrap.</p>
        <code className='code'> npm install semantic-ui-css</code>
          <br/>
          <br/>
          <br/>
        <p>After install, you'll need to include the minified CSS file in your index.js file:</p> 
        <code className='code'>import 'semantic-ui-css/semantic.min.css'; </code>
          <br/>
          <br/>
        <h3>Examples</h3>
        <p>For examples on how to import and use Semantic UI React components, click the code icon next to any example. Here are a few direct links:</p> 
        <a href="https://react.semantic-ui.com/elements/button#button-example-button">&bull; Button</a>
          <br/>
        <a href="https://react.semantic-ui.com/elements/list#list-example-list">&bull; List</a>
          <br/>
        <a href="https://react.semantic-ui.com/views/card#card-example-card">&bull; Card</a>
          <br/>
        <a href="https://react.semantic-ui.com/modules/modal#modal-example-modal">&bull; Modal</a>
          <br/>
        <a href="https://react.semantic-ui.com/elements/image">&bull; Image</a>
          <br/>
        <a href="https://react.semantic-ui.com/collections/menu">&bull; Menu</a>
          <br/>
          <br/>
        <a href="https://react.semantic-ui.com/introduction"><h4>Link to the Official website</h4></a>
          <br/>
          <br/>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default SemanticUI
