import React, { useRef } from 'react';
import { Container, Form, Button, Card, } from 'react-bootstrap';

const AddService = () => {
   const titleRef = useRef()
   const descriptionRef = useRef()
   const imgUrlRef = useRef()
   const priceRef = useRef()
   const placeRef = useRef()

   const handleAddService= e =>{
      const title = titleRef.current.value
      const description = descriptionRef.current.value
      const img = imgUrlRef.current.value
      const price = priceRef.current.value
      const place = placeRef.current.value

      const newService = {title, description, img, price, place}
      fetch(`http://localhost:5000/addservice`,{
         method: 'POST',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(newService)
      })
      .then(res=> res.json())
      .then(result=>{
         if(result.insertedId){
            alert('User Added Successfully')
            e.target.rest()
         }
      })
   }
 
   return (
      <div className="pt-5 text-center">
         <Container>
            <Card style={{width:"40rem"}} className="m-auto my-5 shadow">
               <h4 className="mt-5">Add Tours Service</h4>
               <Form onSubmit={handleAddService} className="w-50 bg-white p-5 m-auto rounded">
                  <Form.Group className="mb-3" >
                     <Form.Control type="text" ref={titleRef}  placeholder="Title..." required />
                  </Form.Group> 
                  <Form.Group className="mb-3" >
                     <Form.Control type="text" ref={descriptionRef} placeholder="Description..."/>
                  </Form.Group> 
                  <Form.Group className="mb-3" >
                     <Form.Control type="number" ref={priceRef} placeholder="Price..." />
                  </Form.Group> 
                  <Form.Group className="mb-3" >
                     <Form.Control type="text" ref={placeRef} placeholder="Place..." />
                  </Form.Group> 
                  <Form.Group className="mb-3">
                     <Form.Control type="text" ref={imgUrlRef} placeholder="Image url..." />
                  </Form.Group> 
                  <Button type="submit" className="mb-2">Add</Button>
               </Form>
            </Card>
         </Container>
      </div>
   );
};

export default AddService;