import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Login.css';

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
      <div className="buttons">
        <Link to ="/signup">
        <button >Signup  </button>
        </Link>
        <Link to ="/">
        <button >Login</button>
        </Link>
        </div>
        <h2>Signup</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="username" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div><div className="form-group">
            <label>confirm Password</label>
            <input type="password" placeholder="confirm password" />
          </div>
          <Link to ="/add-account">
          <button type="submit">Next</button>
          </Link>
        </form>
       
      </div>
    </div>
  );
};

export default Signup;