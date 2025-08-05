import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../assets/menu.png"
import endlogo from "../assets/navButton.png"
const Menu = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className= "mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
         
         
        </Navbar.Collapse>
        <button style={{border:'none'}}> <img src={endlogo} alt="" /></button>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu