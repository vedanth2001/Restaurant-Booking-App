// src/components/Login.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (replace the console.log statement)
    console.log('Simulating login process:', formData);

    // Redirect to restaurant listing after successful login
    navigate('/restaurant-listing');
  };

  return (
    <div>
      <h2>Login Page</h2>

      {/* Display success message if redirected from signup with success */}
      {location.state && location.state.signupSuccess && (
        <p>Sign Up successful. Please log in.</p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '400px' }}  // Adjust the width as needed
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '400px' }}  // Adjust the width as needed
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Link to signup page */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
