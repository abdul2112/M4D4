import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const MyNavBar = (props) => (
    <Navbar bg="dark" variant="dark" expand="lg mb-3">
  <Navbar.Brand href="#Navbar">React {props.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#browse">Browse</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavBar