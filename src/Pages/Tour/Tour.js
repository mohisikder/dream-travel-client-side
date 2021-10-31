import React from 'react';
import './Tour.css';
import { Card, Col, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Tour = ({tour}) => {
   const {title, img, description, price, place } = tour || {}
   const {user} = useAuth()
   // handle add to cart
   const handleAddToCart = ()=>{
      const data = (tour);
      data.email = user.email
      data.name = user.displayName
      console.log(data);
      fetch("https://hidden-waters-89368.herokuapp.com/addbooking",{
         method:"POST",
         headers:{'content-type': 'application/json'},
         body:JSON.stringify(data)
      })
   }

   return (
      <>
         <Col>
            <Card className="shadow h-100 card-hover">
               <Card.Img className="card-img" variant="top" src={img} />
               <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description.slice(0, 80)} </Card.Text>
                  <p><i className="fa fa-map-marker-alt"></i> {place} </p>
                  <h4>$ {price} </h4>
                  <Link to={`/mybooking`}><Button onClick={()=>handleAddToCart()} className="btn btn-primary text-center">Book Now</Button></Link>
               </Card.Body>
            </Card>
         </Col>
      </>
   );
};

export default Tour;