import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {

  
   return (
      <div>
         <Container className="my-5 text-center">
            <h1 className="display-5 mt-5 fw-bolder">Popular Tours</h1>
            <p>Travel is the activity of going from one place to another place.</p>
         <Row xs={1} md={3} className="g-4 mt-5">
            {Array.from({ length: 6 }).map((_, idx) => (
               <Tour/>
            ))}
         </Row>
         </Container>
      </div>
   );
};

export default Tours;