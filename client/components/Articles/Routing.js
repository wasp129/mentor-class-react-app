import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';


const Routing = () => (
  <Modal trigger={<Button>Routing</Button>} closeIcon>
    <Modal.Header>React Routing</Modal.Header>
    <Modal.Content image scrolling>
      <Image className='modalImg' src='images/logo.svg' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;Beginners guide to routing</h2></Header>
        <p>React likes to keep things as simple as possible and that is why the core library just does exactly what React is about, components. Routing, DOM rendering and other logics are abstracted to a different library. To use routing, we have to pull down React, React Router and React DOM:</p>
        <code className='code'>npm install --save react-router-dom</code>
        <br/>
        <Image className='codeSnippet' src='images/route.jpg' />
        <br/>
        <br/>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default Routing
