import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
       <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top" className="mb-5">
         <Container>
         <Navbar.Brand href="/">DreamTravel</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
               <Nav.Link as={Link} to="/home">Home</Nav.Link>
               <Nav.Link as={Link} to="/about">About Us</Nav.Link>
               <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
            </Nav>
            <Nav>
               <Nav.Link href="#deets">More deets</Nav.Link>
               <Nav.Link eventKey={2} href="#memes">
               Dank memes
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
         </Container>
         </Navbar>  
      </>
   );
};

export default Header;