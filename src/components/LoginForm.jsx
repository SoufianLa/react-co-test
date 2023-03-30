import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { pathDashboard, pathSignup } from '../routes';
import PropTypes from 'prop-types';
import { Form, Button, Alert} from 'react-bootstrap';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
      navigate(pathDashboard());
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleAlertDismiss = () => {
    setErrorMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
        required
      />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
    </Form.Group>
    {errorMessage && (
        <Alert variant="danger" dismissible onClose={handleAlertDismiss} className="signup-alert">{errorMessage}</Alert>
      )}
    <Button variant="primary" type="submit" className="button-login">
      Log in
    </Button>
  </Form>
  );
};

export default LoginForm;
