import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { pathDashboard } from '../routes';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await AuthService.login(email, password);
      // Redirect to dashboard or perform any other action upon successful login
      console.log("ok");
      navigate(pathDashboard());
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
