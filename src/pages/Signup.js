import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit =async e => {
    e.preventDefault();
    await axios.post('http://localhost:8080/user',e.target)
    navigate('/')
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div>
          <label>
            <input type="checkbox" name="agreeToTerms" onChange={handleChange} />
            I agree to <a href='example.html' > the terms and conditions</a>
            
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
