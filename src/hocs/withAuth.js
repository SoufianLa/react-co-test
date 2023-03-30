import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const isAuthenticated = AuthService.isLoggedIn();

    console.log(isAuthenticated)
    
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    return <Component {...props} />;
  };
};

export default withAuth;
