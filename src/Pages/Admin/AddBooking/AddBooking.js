import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddBooking = () => {
   const nameRef = useRef()
   const usernameRef = useRef()
   const emailRef = useRef()
   const phoneRef = useRef()
   const cityRef = useRef()

   const handleAddUser= e =>{
      const name = nameRef.current.value
      const username = usernameRef.current.value
      const email = emailRef.current.value
      const phone = phoneRef.current.value
      const city = cityRef.current.value

      const newUser = {name, username, email, phone, city}
      fetch(`http://localhost:5000/users`,{
         method: 'POST',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(newUser)
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
      <div className="pt-200 text-center">
         <h1>Please Add User</h1>
         <Container>
            <Form onSubmit={handleAddUser} className="w-50 bg-white p-5 m-auto rounded">
               <Form.Group className="mb-3" >
                  <Form.Control type="text" ref={nameRef}  placeholder="Name" required />
               </Form.Group> 
               <Form.Group className="mb-3" >
                  <Form.Control type="text" ref={usernameRef} placeholder="Username"/>
               </Form.Group> 
               <Form.Group className="mb-3" >
                  <Form.Control type="text" ref={emailRef} placeholder="Email" />
               </Form.Group> 
               <Form.Group className="mb-3" >
                  <Form.Control type="text" ref={phoneRef} placeholder="Phone" />
               </Form.Group> 
               <Form.Group className="mb-3">
                  <Form.Control type="text" ref={cityRef} placeholder="City" />
               </Form.Group> 
               <Button type="submit" className="mb-2">Add User</Button>
            </Form>
         </Container>
      </div>
   );
};

export default AddBooking;