import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tours = () => {
   return (
      <div>
         <Container className="my-5 text-center">
            <h1 className="display-5 mt-5 fw-bolder">Popular Tours</h1>
            <p>Travel is the activity of going from one place to another place.</p>
         <Row xs={1} md={3} className="g-4 mt-5">
            {Array.from({ length: 6 }).map((_, idx) => (
               <Col>
                  <Card className="shadow">
                  <Card.Img variant="top" src="https://i.ibb.co/pfZf35R/image-1.jpg" />
                  <Card.Body>
                     <Card.Title>4 Days Bali Saver</Card.Title>
                     <Card.Text>
                     INCLUDED: Hotel, Breakfast, Tours, Airport transfers
                     </Card.Text>
                     <Link><Button className="btn btn-primary ">More Info</Button></Link>
                  </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
         </Container>
      </div>
   );
};

export default Tours;