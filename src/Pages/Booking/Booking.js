import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { user } = useAuth();

   //    const handleSubmitCart = (index) =>{

   //       const data = ([index]);
   //       console.log(data);
   //       data.email = user?.email
   //       data.name = user?.displayName
   //       data.address = user?.address
   //       data.city = user?.city
   //       data.phone = user?.phone
      
   //    fetch(`https://hidden-waters-89368.herokuapp.com/addbooking`,{
   //       method: 'POST',
   //       headers:{'content-type':'application/json'},
   //       body:JSON.stringify('data')
   //    })
   //    .then(res=> res.json())
   //    .then(result=>{
   //       if(result.insertedId){
   //          alert('User Added Successfully')
            // reset()
   //       }
   //    })
   // }

   return (
      <>
      <h1 className="text-center my-5 pt-5">Place Order</h1>
      <div className=" d-flex justify-content-center align-items-center">
         <div>
            <form className="booking-form" onSubmit={handleSubmit()}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            <input type="submit" />
            </form>
         </div>
      </div>
      </>
   );
};

export default Booking;