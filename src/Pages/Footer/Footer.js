import React from 'react';
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <div className="bg-dark text-white">
         <Container className="py-5">
            <Row>
               <Col md={6}>
                  <h1>Dream Travel</h1>
                  <p>Explore the world with <strong>Dream Travel</strong></p>
                  <div>
                     <p>Follow us____:</p>
                     <div className="fs-3">
                        <i className="fab fa-facebook-square"></i>
                        <i className="ms-3 fab fa-google-plus-square"></i>
                        <i className="ms-3 fab fa-linkedin"></i>
                     </div>
                  </div>
               </Col>
               <Col md={3}>
                  <h4>Useful Links</h4>
                  <Nav defaultActiveKey="/" className="flex-column">
                     <NavLink as={Link} className="text-white" to="/home">Home</NavLink>
                     <NavLink as={Link} className="text-white" to="/about">About Us</NavLink>
                     <NavLink as={Link} className="text-white" to="/tours">Tours</NavLink>
                  </Nav>
               </Col>
               <Col md={3}>
                  <h4>Address</h4>
                  <p>200, D-block, Green lane USA</p>
                  <p>+10 367 467 8934</p>
                  <p>info@dreamtravel.com</p>
                  <p>www.dreamtravel.com</p>
               </Col>
            </Row>
         </Container>
         <div className="bg-black py-3 mb-0 text-center">
            <span>Copyright &copy; 2021 All rights reserved | This template is made with  by <a href="https://github.com/mohisikder">Mohiuddin Sikder</a></span>
         </div>
      </div>
      </>
   );
};

export default Footer;