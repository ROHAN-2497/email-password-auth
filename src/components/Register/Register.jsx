import React, { useState } from "react";

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
  }

  return (
    <div>
      <h4>Pleace Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="Password"
          name="Password"
          id="Password"
          placeholder="Your Password"
        />
        <br />
        <input type="Submit" value="register" />
      </form>
    </div>
  );
};

export default Register;
