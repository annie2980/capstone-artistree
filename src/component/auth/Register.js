import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../../database/firebase"


const Register = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;

    if (email && password && name){
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) =>{
            console.log(result)
        }) 
        .catch((error) => {
            console.log(error)
        })
    } 
};

  return (
    <div className="form ">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit" >Register</button>
      </form>
    </div>
  );
};

export default Register;