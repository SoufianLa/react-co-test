import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { pathDashboard } from '../routes';
import PropTypes from 'prop-types';
import { Form, Button, Alert} from 'react-bootstrap';


const LoginForm = ({setToken}) => {
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
      const user = await AuthService.login(email, password);
      setToken(user);
      // Redirect to dashboard or perform any other action upon successful login
      navigate(pathDashboard());
    } catch (error) {
      setErrorMessage(error.message);
      // Handle login error
      console.error(error);
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

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginForm;
