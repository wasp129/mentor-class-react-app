import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import Clickcounter from './Clickcounter.js';

const Click = () => (
  <Modal trigger={
  <div className='polaroid styling-polaroid'>
      <Button className='img-grid'>
      <Image className='img-grid-btn' src='images/logo.png'/>
        <div class="container-btn">
          <p className='headline'>State</p>
        </div>
      </Button>
    </div>
  } closeIcon>
    <Modal.Header>State</Modal.Header>
    <Modal.Content image>
      <Image className='modal-img' src='images/ov-1.png' />
      <Modal.Description>
        <Header><h2>&#32;Clickcounter</h2></Header>
        <Clickcounter/>
      </Modal.Description>
    </Modal.Content>
    
  </Modal>
)

export default Click;