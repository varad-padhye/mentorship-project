import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="submit">
          <button type="submit">Next</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
