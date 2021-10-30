import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   const {user, handleSignOut} = useAuth()
   console.log(user);
   return (
      <>
       <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
         <Container>
         <Navbar.Brand href="/">DreamTravel</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
               <Nav.Link as={Link} to="/home">Home</Nav.Link>
               <Nav.Link as={Link} to="/about">About Us</Nav.Link>
               <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
               { user.email && <Nav.Link as={Link} to="/addservice">Add Tour</Nav.Link>}
               { user.email && <Nav.Link as={Link} to="/mybooking">My Booking</Nav.Link>}
               { user.email && <Nav.Link as={Link} to="/managebooking">Manage Booking</Nav.Link>}
               { user.email && <img className="rounded-circle" style={{height:"30px", width:"30px", marginTop:"5px"}} src={user.photoURL} alt="" />}
               { user.email && <span className="text-white p-2">{user.displayName || user.email}</span>}
               { user.email?
                  <Button onClick={handleSignOut} variant="light">Logout</Button> 
                  :
                  <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
               }

            </Nav>
         </Navbar.Collapse>
         </Container>
         </Navbar>  
      </>
   );
};

export default Header;