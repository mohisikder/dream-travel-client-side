import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Tour = () => {
   const history = useHistory()
   const handleDetails=()=>{
      const uri= `/tours/id`
      history.push(uri)
      console.log('Clicked');
  }
   return (
      <>
         <Col>
            <Card className="shadow">
               <Card.Img variant="top" src="https://i.ibb.co/pfZf35R/image-1.jpg" />
               <Card.Body>
                  <Card.Title>4 Days Bali Saver</Card.Title>
                  <Card.Text>
                  INCLUDED: Hotel, Breakfast, Tours, Airport transfers
                  </Card.Text>
                  <Button onClick={()=>handleDetails()} className="btn btn-primary ">Book Now</Button>
               </Card.Body>
            </Card>
         </Col>
      </>
   );
};

export default Tour;