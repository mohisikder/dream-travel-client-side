import React, { useEffect, useState } from 'react';
import './Tours.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Tours = () => {
const [tours, setTours] = useState([])
const {user} = useAuth()

useEffect(()=>{
   const url=`https://hidden-waters-89368.herokuapp.com/tours`
   fetch(url)
   .then(res=> res.json())
   .then(data=>setTours(data))
},[])

// Handle Add to Cart
const handleAddToCart = (index) =>{
   const data = (tours[index]);
   data.email = user?.email
   data.name = user?.displayName
   
   fetch(`https://hidden-waters-89368.herokuapp.com/addbooking`,{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
   })
   .then(res=> res.json())
   .then(result=>{
      if(result.insertedId){
         alert('User Added Successfully')
         
      }
   })
}
   return (
      <div className="pt-80">
         <Container>
            <div className="text-center">
               <h1 className="display-5 mt-5 fw-bolder">Popular Tours</h1>
               <p>Travel is the activity of going from one place to another place.</p>
            </div>
         <Row xs={12} md={3} className="g-4 mt-5">
            {
               tours.map((tour , index)=><Col key={tour?._id}>
               <Card className="shadow h-100 card-hover">
                  <Card.Img className="card-img" variant="top" src={tour?.img} />
                  <Card.Body>
                     <Card.Title>{tour?.title}</Card.Title>
                     <Card.Text>{tour?.description.slice(0, 80)} </Card.Text>
                     <p><i className="fa fa-map-marker-alt"></i> {tour?.place} </p>
                     <h4>$ {tour?.price} </h4>
                     <Link to={`/booking`}><Button onClick={()=>handleAddToCart(index)} className="btn btn-primary text-center">Book Now</Button></Link>
                  </Card.Body>
               </Card>
            </Col>)
            }
         </Row>
         </Container>
      </div>
   );
};

export default Tours;