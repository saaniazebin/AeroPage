import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../assets/menu.png"
import icon from "../assets/icon.png"
import { FaCloudDownloadAlt } from "react-icons/fa";


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
        
        

        <button style={{ padding:'18px 59px 18px 100px',borderRadius:'20px', borderColor:'white', background:'#EA580C',color:'white'}}>  <img style={{paddingRight:'29px'}} src={icon} alt="" />  Download</button>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu