import React, { useRef, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from "../../database/firebase"
import {setDoc, doc} from 'firebase/firestore';
import { Checkbox } from "../Checkbox";

const Register = () => {
  const allInterests = [
    { name: "Sewing", checked: false },
    { name: "Crochet", checked: false },
    { name: "Upcycling", checked: false }
  ]

  const [interests, setInterests] = useState(allInterests)
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

  const updateCheckStatus = index => {
    setInterests([
      ...interests.slice(0, index),
      { ...interests[index], checked: !interests[index].checked },
      ...interests.slice(index + 1),
    ]);

   
  }

  const selectAll = () => {
    setInterests(interests.map(interest => ({ ...interest, checked: true })))
  }
  const unSelectAll = () => {
    setInterests(interests.map(interest => ({ ...interest, checked: false })))
  }
  


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    
    let arr =[];

    interests.map((topping) => {
      if(topping.checked){
        arr.push(topping.name)
      }
    })
    console.log(arr)

    if (email && password && name){
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) =>{
            const user = auth.currentUser.uid;
            setDoc(doc(db, "users", user), {
                email: email,
                name: name,
                password: password,
                arr,
                uid: user,
              });
              updateProfile(auth.currentUser, {
                displayName: name
              })
            console.log(user);
            
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

        <p>
        <button onClick={selectAll}>Select All</button>
        <button onClick={unSelectAll}>Unselect All</button>
        </p>
        {interests.map((interest, index) => (
        <Checkbox
          key={interest.name}
          isChecked={interest.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={interest.name}
          index={index}
        />
         ))}
        <button type="submit" >Register</button>
      </form>
    </div>
  );
};

export default Register;