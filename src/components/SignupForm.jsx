import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { pathLogin } from '../routes';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await AuthService.signup(firstName, lastName, password, avatar);
      console.log("ok sign up");
      navigate(pathLogin());
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      minLength="2"
      maxLength="25"
      value={firstName}
      onChange={handleFirstNameChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      minLength="2"
      maxLength="25"
      value={lastName}
      onChange={handleLastNameChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      maxLength="50"
      value={email}
      onChange={handleEmailChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      className="form-control"
      minLength="6"
      maxLength="50"
      pattern=".*[0-9]+.*"
      id="password"
      name="password"
      value={password}
      onChange={handlePasswordChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="avatar">Avatar Image</label>
    <input
      type="file"
      className="form-control-file"
      id="avatar"
      accept="image/*"
      onChange={handleAvatarChange}
      required
    />
  </div>
  {errorMessage && (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  )}
  <button type="submit" className="btn btn-primary">
    Sign Up
  </button>
</form>

  );
};

export default SignupForm;
