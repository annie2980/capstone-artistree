import React, { useRef } from 'react'
import { signInWithEmailAndPassword, sendPasswordResetEmail,
} from "firebase/auth";
import {auth} from "../../database/firebase"

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password){
      signInWithEmailAndPassword(auth, email, password)
      .then((result) =>{
          console.log(result)
      }) 
      .catch((error) => {
          console.log(error)
      })
    }
    if(auth.currentUser){
      console.log("hi")
    }
  };


  const forgotPassword = () => {
    const email = emailRef.current.value;
    return sendPasswordResetEmail(auth, email); //Sends a password reset email to the given email address. (firebase)
  };

  return (
    <div className="container">
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPassword}>Forgot Password?</p>
      </form>
    </div>
    </div>
);
};

export default Login;