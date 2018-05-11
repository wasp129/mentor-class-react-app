import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const Node = () => (
  <Modal trigger={<Button>Node.js</Button>} closeIcon>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image wrapped size='large' src='./images/node.png' />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Node
