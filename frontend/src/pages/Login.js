import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../components/Login.css';
import { FaUser, FaLock } from 'react-icons/fa';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setErrorMessage(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      if (response.status === 200) {
        // Successful login
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-page">
      <div className="welcome">
        <h1 className='welcometo'>Welcome to</h1>
        <h2 className='fintastic'>FINTASTIC</h2>
        <div className='message1'>ready to elevate your financial decisions?</div>
      </div>
      <div className="login-container">
        <div className="buttons">
          <Link to="/signup">
            <button className="tab-button">Signup</button>
          </Link>
          <Link to="/">
            <button className="tab-button">Login</button>
          </Link>
        </div>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="submit">
              <button type="submit" className="submit-button">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
