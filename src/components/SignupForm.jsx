import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { pathLogin } from '../routes';
import { Form, Button, Alert } from 'react-bootstrap';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pictures, setPictures] = useState([]);
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
  const handlePicturesChange = (event) => {
    setPictures([...event.target.files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pictures.length < 4) {
      setErrorMessage('Please upload at least 4 pictures.');
      return;
    }

    try {
      await AuthService.signup(firstName, lastName, email, password, pictures);
      navigate(pathLogin());
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleAlertDismiss = () => {
    setErrorMessage('');
  };

  return (
    <Form onSubmit={handleSubmit} encType='multipart/form-data'>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          minLength="2"
          maxLength="25"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          minLength="2"
          maxLength="25"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          maxLength="50"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          minLength="6"
          maxLength="50"
          pattern=".*[0-9]+.*"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="pictures">
        <Form.Label>Pictures</Form.Label>
        <Form.Control
          type="file"
          name="file"
          multiple
          accept="image/*"
          onChange={handlePicturesChange}
          required
        /> 
        </Form.Group>
      {errorMessage && (
        <Alert variant="danger" dismissible onClose={handleAlertDismiss} className="signup-alert">{errorMessage}</Alert>
      )}
      <Button variant="primary" type="submit" className='button-signup'>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
