import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
   const {user} = useAuth()
   const [booking, setBooking] = useState([])
   const [control, setConrol] = useState(false);
   useEffect(()=>{
      fetch(`https://hidden-waters-89368.herokuapp.com/mybooking/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setBooking(data))
   },[user.email])

   // Handle Delete
   const handleDelete = id =>{
      fetch(`https://hidden-waters-89368.herokuapp.com/deleteMyBooking/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
   }

   return (
      <>
         <div className="container">
            <h1>My Booking {booking?.length}</h1>
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
                     onClick={() => handleDelete(pd._id)}
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