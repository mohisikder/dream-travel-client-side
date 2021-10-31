import React, { useEffect, useState } from 'react';
import './Tours.css';
import { Container, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
const [tours, setTours] = useState([])

useEffect(()=>{
   const url=`https://hidden-waters-89368.herokuapp.com/tours`
   fetch(url)
   .then(res=> res.json())
   .then(data=>setTours(data))
},[])
  
   return (
      <div className="pt-80">
         <Container>
            <div className="text-center">
               <h1 className="display-5 mt-5 fw-bolder">Popular Tours</h1>
               <p>Travel is the activity of going from one place to another place.</p>
            </div>
         <Row xs={1} md={3} className="g-4 mt-5">
            {
               tours.map((tour, index)=><Tour
                  key= {tour._id}
                  tour = {tour}
               ></Tour>)
            }
         </Row>
         </Container>
      </div>
   );
};

export default Tours;