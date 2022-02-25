import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="auth ">
      {!index ? <Login /> : <Register />}
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an account?"}
      </p>
    </div>
  );
};

export default Auth;