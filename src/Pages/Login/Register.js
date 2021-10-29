import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
   const {signUpWithGoogle, setUser, setIsLoading} = useAuth()

   const history= useHistory()
   const location = useLocation()
   const url= location.state?.from || "/home"

   const handleGoogleSignup = ()=>{
      signUpWithGoogle()
      .then((res) => 
       {
         setIsLoading(true)
         setUser(res.user)
         history.push(url)
       }
         )
     .catch((err) => console.log(err))
     .finally(() => {
       setIsLoading(false)
     })
   }
   return (
      <>
        <Card style={{width:"18rem", margin:"auto", marginTop:"100px", marginBottom:"100px"}} className="shadow">
          <h4 className="text-center mt-2">Register</h4>
          <hr />
          <div className=" my-3 text-center">
          <button onClick={handleGoogleSignup} className="btn btn-danger"><i className="me-3 fab fa-google"></i>Google Sign Up</button>
          <p className="mt-3 text-black">Already have an account? <Link className="text-black" to="/login">Login</Link></p>
          </div>
        </Card> 
      </>
   );
};

export default Register;