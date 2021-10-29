import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   const {user, handleSignOut} = useAuth()
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
            <Nav.Link><span className="text-white">{user.displayName || user.email}</span></Nav.Link>
                     {user.email?
                        <Button onClick={handleSignOut} variant="light">Logout</Button> :
                        <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}
            </Nav>
         </Navbar.Collapse>
         </Container>
         </Navbar>  
      </>
   );
};

export default Header;