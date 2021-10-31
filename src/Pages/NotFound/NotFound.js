import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
   return (
      <Container className="d-flex justify-content-center align-items-center text-center my-5">
         <div>
            <h1>404</h1>
            <h1>This Page Not Found...</h1>
         </div>
      </Container>
   );
};

export default NotFound;