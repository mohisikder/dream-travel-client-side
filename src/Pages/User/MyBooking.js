import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
   const {user} = useAuth()
   const [booking, setBooking] = useState([])
   useEffect(()=>{
      fetch(`https://hidden-waters-89368.herokuapp.com/mybooking/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setBooking(data))
   },[user.email])

   // Handle Delete
  const handleBookingDelete = id =>{
   const proceed = window.confirm('Are you sure, you want to delete?')
   if(proceed){
      fetch(`https://hidden-waters-89368.herokuapp.com/booking/${id}`,{
         method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
         if(data.deletedCount > 0){
            alert('Booking deleted successfully')
            const remainingUsers = booking.filter(pd => pd?._id)
            setBooking(remainingUsers)
         }
      })
   }
}

   return (
      <>
         <div className="container mt-5">
            <h1 className="text-center py-5">My Booking {booking?.length}</h1>
            <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Event Title</th>
                  <th>Event description</th>
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
                     onClick={() => handleBookingDelete(pd?._id)}
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

export default MyBooking;