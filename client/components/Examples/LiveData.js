import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import RealTimeData from './RealTimeData.js';

const LiveData = () => (
  <Modal trigger={
  <div className='polaroid styling-polaroid'>
      <Button className='img-grid'>
      <Image className='img-grid-btn' src='images/logo.png'/>
        <div class="container-btn">
          <p className='headline'>Overview</p>
        </div>
      </Button>
    </div>
  } closeIcon>
    <Modal.Header>Overview</Modal.Header>
    <Modal.Content image>
      <Image className='modal-img' src='images/ov-1.png' />
      <Modal.Description>
        <Header><h2>&#32;Live Data</h2></Header>
        <RealTimeData/>
      </Modal.Description>
    </Modal.Content>
    
  </Modal>
)

export default LiveData;