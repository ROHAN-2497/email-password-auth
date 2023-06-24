import React, { useState } from "react";
import app from "../../firebase/firebase.config";
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const auth = getAuth(app)

const Register = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const email = event.target.email.value
    const Password = event.target.Password.value
   console.log(email, Password)
   createUserWithEmailAndPassword(auth, email, Password)
   .then( result =>{
    const loggedIn = result.user;
    console.log(loggedIn)
   })
   .catch(error =>{
    console.log(error)
   })
  }

  return (
    <div className="w-50 mx-auto">
      <h4>Pleace Register</h4>
      <form onSubmit={handleSubmit}>
        <input className="mb-4 w-50 rounded ps-2"
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input className="mb-4 w-50 rounded ps-2"
          onBlur={handlePasswordBlur}
          type="Password"
          name="Password"
          id="Password"
          placeholder="Your Password"
        />
        <br />
        <input className="btn btn-primary" type="Submit" value="register" />
      </form>
    </div>
  );
};

export default Register;
