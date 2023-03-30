import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { pathLogin } from '../routes';

const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const isAuthenticated = AuthService.isLoggedIn();

    console.log(isAuthenticated)
    
    if (!isAuthenticated) {
      return <Navigate to={pathLogin()} />;
    }
    
    return <Component {...props} />;
  };
};

export default withAuth;
