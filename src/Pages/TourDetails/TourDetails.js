import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const TourDetails = () => {
   return (
      <>
         <Container>
            <Row>
               <Col md={8} xm={12}>
               <Card className="shadow">
                  <Card.Img variant="top" src="https://i.ibb.co/pfZf35R/image-1.jpg" />
                  <Card.Body>
                     <Card.Title>4 Days Bali Saver</Card.Title>
                     <Card.Text>
                     INCLUDED: Hotel, Breakfast, Tours, Airport transfers
                     </Card.Text>
                  </Card.Body>
                  </Card>
               </Col>
               <Col md={4} xm={12}>
                  <Card>
                     <CardHeader>
                        <h4>Booking Details</h4>
                     </CardHeader>
                  </Card>
               </Col>
            </Row>
         </Container>  
      </>
   );
};

export default TourDetails;