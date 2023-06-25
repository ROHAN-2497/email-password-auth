import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");
  const emailRef = useRef();


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    setSucess("");
    event.target.reset();
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("add at least one upper case");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("please add one digit");
      return;
    } else if (password.length < 6) {
      setError("must be use six character");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggeduser = result.user;
        setSucess('User Logged In SuccessFully');
        console.log(loggeduser)
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleResetPassword = event =>{
  const email = (emailRef.current.value);
  if(!email){
    alert('please provide your email address to reset password')
    return
  }
  sendPasswordResetEmail(auth, email)
  .then(() =>{
    alert('please cheak your email')
  })
  .catch(error =>{
    console.log(error);
    setError(error.message)
  })
  }
  return (
    <div className="w-25 mx-auto">
      <h3>This is Login Page</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            required
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p><small>Have an account ? Please <Link to="/register">Register</Link></small></p>
      </form>
      <p><small>Forget Password ? please<button onClick={handleResetPassword} className="btn btn-link">Reset Password</button></small></p>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Login;
