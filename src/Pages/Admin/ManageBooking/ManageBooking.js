import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageBooking = () => {
   const [booking, setBooking] = useState([])
   const {user} = useAuth()

   useEffect(()=>{
      fetch(`https://hidden-waters-89368.herokuapp.com/allbooking`)
      .then(res=> res.json())
      .then(result=>setBooking(result))
   },[user.email])
   
   
   return (
      <>
         <div className="container mt-5">
            <h1 className="text-center py-5">Manage all Booking {booking?.length}</h1>
            <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>description</th>
                  <th>Image Link</th>
                  <th>Price</th>
                  <th>Action</th>
               </tr>
            </thead>
            {booking?.map((pd, index) => (
               <tbody>
                  <tr>
                  <td>{index}</td>
                  <td>{pd.title}</td>
                  <td>{pd.description}</td>
                  <td>{pd.image}</td>
                  <td>{pd.price}</td>
                  <button
                     
                     className="btn bg-danger p-2"
                  >
                     Delete
                  </button>
                  </tr>
               </tbody>
            ))}
            </Table>
         </div>
      </>
   );
};

export default ManageBooking;