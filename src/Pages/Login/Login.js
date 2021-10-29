import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const {loginWithGoogle, setUser, setIsLoading} = useAuth()

const history= useHistory()
const location = useLocation()
const url= location.state?.from || "/home"

const handleGoogleLogin = () => {
   loginWithGoogle()
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
 };
   return (
      <>
        <Card style={{width:"18rem", margin:"auto", marginTop:"100px", marginBottom:"100px"}} className="shadow">
          <h4 className="text-center mt-2">Login</h4>
          <hr />
          <div className=" my-3 text-center">
          <button onClick={handleGoogleLogin} className="btn btn-danger"><i className="me-3 fab fa-google"></i>Google Sign In</button>
          <p className="mt-3 text-black">Don't have an account? <Link className="text-black" to="/register">Register</Link></p>
          </div>
        </Card>
      </>
   );
};

export default Login;