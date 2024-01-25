// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '', // New phone number field
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (replace the console.log statement)
    console.log('Simulating signup process:', formData);

    // Redirect to login page after successful signup with a success message
    navigate('/login', { state: { signupSuccess: true } });
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '400px' }}  // Adjust the width as needed
          />
        </div>
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
          <label>Phone Number:</label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
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
        <button type="submit">Sign Up</button>
      </form>

      {/* Link to login page */}
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default Signup;
