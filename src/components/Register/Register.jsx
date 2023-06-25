import React, { useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const handleEmailChange = (event) => {
    // setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    setSucess("");
    setError("");
    const email = event.target.email.value;
    const Password = event.target.Password.value;
    const name = event.target.name.value;
    console.log(name, email, Password);
    if (!/(?=.*[0-9])/.test(Password)) {
      setError("pleace add atleast one number");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(Password)) {
      setError("please add atleast one speacial character");
      return;
    } else if (Password.length < 6) {
      setError("please add a six character");
      return;
    }
    createUserWithEmailAndPassword(auth, email, Password)
      .then((result) => {
        const loggedIn = result.user;
        setError("");
        event.target.reset();
        setSucess("user has created Successfully");
        sendVerificaionEmail(result.user);
        updateUserData(result.user , name)
        console.log(loggedIn);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const sendVerificaionEmail = (user) => {
    sendEmailVerification(user).then((result) => {
      console.log(result);
      alert("please verify your email address");
    });
  };
  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message  );
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h4>Pleace Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="mb-4 w-50 rounded ps-2"
          type="terxt"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          className="mb-4 w-50 rounded ps-2"
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          className="mb-4 w-50 rounded ps-2"
          onBlur={handlePasswordBlur}
          type="Password"
          name="Password"
          id="Password"
          placeholder="Your Password"
          required
        />
        <br />
        <p className="text-danger">{error}</p>
        <input className="btn btn-primary" type="Submit" value="register" />
        <p>
          <small>
            Already hava an Account ? Please <Link to="/login">Login</Link>
          </small>
        </p>
      </form>
      <p className="text-success">{sucess}</p>
    </div>
  );
};

export default Register;
