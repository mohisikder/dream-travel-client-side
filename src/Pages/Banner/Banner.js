import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
   return (
      <div className="banner-img text-center">
         <Container>
            <Row>
               <Col>
                  <div className="pt-200">
                     <h1 className="banner-title">Explore the World with <br /> Dream Travel</h1>
                     <p>Travel is the movement of people between distant geographical locations.</p>
                     <Link><Button variant="primary" className="px-5">Discover</Button></Link>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Banner;