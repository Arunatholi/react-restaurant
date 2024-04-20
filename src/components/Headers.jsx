import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Headers() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">My Pro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to ="/">Home</Nav.Link>
                <Nav.Link as={Link} to ="/about">About</Nav.Link>
                <Nav.Link as={Link} to ="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to ="/adding">Adding</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Headers