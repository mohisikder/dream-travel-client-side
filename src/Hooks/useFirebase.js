import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
   const auth = getAuth()
   const [user, setUser] = useState({})
   const [error, setError] = useState("")
   const [isLoading , setIsLoading] =useState(true)
   
   //Register with Google
   const signUpWithGoogle = ()=>{
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider)
   }

   // Login With Google
   const loginWithGoogle = ()=>{
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider)
   }

   // Sign Out
   const handleSignOut = ()=>{
      signOut(auth).then(() => {
         setUser({})
       }).catch((error) => {
         setError("")
       });
   }

   return ({
      user,
      loginWithGoogle,
      setUser,
      setIsLoading,
      isLoading,
      handleSignOut,
      signUpWithGoogle
   }
   );
};

export default useFirebase;