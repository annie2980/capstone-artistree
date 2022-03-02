import React, { useRef } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail,
} from "firebase/auth";
import { Card, TextField, Button } from '@mui/material';
import {auth} from "../../database/firebase";

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
      <div>
        <img src="img/artistree-logo.png" className="logo"/>
      </div>
      <div className="form">
      {/* <Card className="form"> */}
        <h1 className='login-word'> Login </h1>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit">Sign In</button>
          <p onClick={forgotPassword}>Forgot Password?</p>
        </form>
        {/* <form onSubmit={onSubmit}>
          <TextField id="standard-basic" label="Email" type="email" variant="standard" ref={emailRef} />
          <TextField id="standard-basic" label="Password" type="password" variant="standard" ref={psdRef} />
          <Button className = "signin-button" type="submit" variant="outlined">
              Sign in
          </Button>
            <p onClick={forgotPassword}>Forgot Password?</p>
        </form> */}
      {/* </Card> */}
      </div>
    </div>
);
};

export default Login;