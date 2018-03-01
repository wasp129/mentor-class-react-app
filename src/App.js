import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

// const HeaderElements = props => <p>{props.children}</p>;

class App extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>React 101</Header>
        <Card>
          <Image src='/assets/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
  </Card>
      </div>
    );
  }
}

export default App;

