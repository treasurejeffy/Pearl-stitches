import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Offcanvas  } from "react-bootstrap";
import Logo from '../../assets/pearl.png';
import './Navbar.css'

export default function Navabar() {
    return(
        <>
        {[ 'lg'].map ((expand) => (
          <Navbar key={expand} expand={expand} className="bg-transparent  shadow-sm p-3 bg-body rounded">
            <Container >
              <Navbar.Brand href="#"><img src={Logo} alt="Logo"
               className="Logo" /> </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="shadow-none border-0" />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand} `}
                className='offcanvas_bg_color'
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"              
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Logo}   alt="Logo"   className="Logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="ms-auto myNav">
                    <Nav.Link href="#action1" className="links mx-2 ">Home</Nav.Link>
                    <Nav.Link href="#action2" className="mx-2 links ">About</Nav.Link>
                    <Nav.Link href="#action2" className="mx-2 links">Contact</Nav.Link>
                    <Nav.Link href="#action2" className="mx-2 links ">Services</Nav.Link>
                    <Nav.Link href="#action2" className="mx-2  links ">Shop</Nav.Link>
                    <Nav.Link href="#action2" className="mx-2 links">Learn</Nav.Link>  
                    <a href="" title="signup to become our customer" className="btn signup_btn btn-primary px-5 py-3  border-0">SignUp</a>                  
                  </Nav>                            
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    )
}