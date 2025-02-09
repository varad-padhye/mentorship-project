import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Login.css';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPen } from 'react-icons/fa';
import axios from 'axios'; // Import axios for making HTTP requests

const Signup = () => {
  // State variables to store the input data
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the data to send to the backend
    const formData = {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    };
    await axios.post('http://localhost:3000/signup', formData);
    // try {
      
    //   const response = await axios.post('http://localhost:3000/signup', formData);

      
    //   if (response.status === 200) {
    //     console.log('Signup successful', response.data);
        
    //   }
    // } catch (error) {
    //   console.error('Error during signup:', error);
      
    // }
  };

  return (
    <div className="login-page">
      <div className="welcome">
        <h1 className='welcometo'>
          Welcome to
        </h1>
        <h2 className='fintastic'>
          FINTASTIC
        </h2>
        <p className='message1'>ready to elevate your financial decisions?</p>
      </div>
      <div className="login-container">
        <div className="buttons">
          <Link to="/signup">
            <button className="tab-button">sign-up</button>
          </Link>
          <Link to="/">
            <button className="tab-button ">login</button>
          </Link>
        </div>

        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <FaPen className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaEye className="toggle-password" />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaEyeSlash className="toggle-password" />
            </div>
            <div className="submit">
             <Link to ="/add-account">
              <button type="submit" className="submit-button">
                Next →
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
