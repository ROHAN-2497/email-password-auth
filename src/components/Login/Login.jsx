import React, { useState } from "react";

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSucess] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError('')
    setSucess('')
    event.target.reset();
    if(!/(?=.*[A-Z])/.test(password)){
        setError('add at least one upper case');
        return
    }
    else if(!/(?=.*[0-9])/.test(password)){
        setError('please add one digit');
        return ;
    }
    else if(password.length <6){
        setError('must be use six character')
    }
  };
  return (
    <div className="w-25 mx-auto">
      <h3>This is Login Page</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
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
      </form>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
    </div>
  );
};

export default Login;
