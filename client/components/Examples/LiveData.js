import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import RealTimeData from './RealTimeData.js';

const LiveData = () => (
  <Modal trigger={<Button>Open Overview</Button>} closeIcon>
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