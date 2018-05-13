import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const NPM = () => (
  <Modal trigger={
  <div className='polaroid'>
      <Button className='img-grid'>
      <Image className='img-grid-btn' src='images/npm.png'/>
        <div class="container-btn">
          <p className='headline'>3. NPM Packages</p>
        </div>
      </Button>
    </div>
  } closeIcon>
    <Modal.Header>The Node.js package ecosystem and NPM</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='large' src='images/npm.png' wrapped />
      <Modal.Description>
        <Header><h2 className='h2-modal'>&#32;The NPM Packages</h2></Header>
        <p>The NPM registry hosts almost half a million packages of free, reusable Node.js code, which makes it the largest software registry in the world. Note that most NPM packages (essentially folders or NPM registry items containing a program described by a package.json file) contain multiple modules (programs that you load with require statements). It’s easy to confuse the two terms, but in this context they have specific meanings and shouldn’t be interchanged. </p>
        <p>NPM can manage packages that are local dependencies of a particular project, as well as globally installed JavaScript tools. When used as a dependency manager for a local project, NPM can install, in one command, all the dependencies of a project through the package.json file. When used for global installations, NPM often requires system (sudo) privileges.</p>
        <p>Why would you want to use an NPM package? In many cases, installing a package via the NPM command line is the fastest and most convenient to get the latest stable version of a module running in your environment, and is typically less work than cloning the source repository and building an installation from the repository. If you don’t want the latest version you can specify a version number to NPM, which is especially useful when one package depends on another package and might break with a newer version of the dependency. </p>
        <h3>Downloading and installing packages</h3>
        <p>There are two ways to install npm packages: locally or globally. Choose which kind of installation to use based on how you want to use the package. </p>
        <p>If you want to use a package as a command line tool, then install it globally. This way, it works no matter which directory is current. This is the choice you would use if you were installing grunt, for example.</p>
        <p>If you want to depend on the package from your own module, then install it locally. This is the choice you would use if you are using require statements, for example.</p>
        
        <p>To download packages globally, use the command <b>npm install -g &lt;package&gt;, e.g.:</b></p>
        <code className='code'>npm install -g jshint</code>
        <br/><br/>
        <p>To download and install a local package:</p>
        <code className='code'>npm install &lt;package&gt;</code> 
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export default NPM
