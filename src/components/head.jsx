import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';

function Heading(){
    return(
        <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home"><h1 className="navname">LOGO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  href="#home"><span className="navname">About</span></Nav.Link>
            <Nav.Link  href="#link"><span className="navname">Service</span></Nav.Link>
            <Nav.Link  href="#link"><span className="navname">Case Studies</span></Nav.Link>
            <Nav.Link  href="#link"><span className="navname">Testimanials</span></Nav.Link>
            <Nav.Link  href="#link"><span className="navname">Contacts</span></Nav.Link>
            <Button variant="light">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Heading;