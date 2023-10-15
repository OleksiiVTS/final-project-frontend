import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/authSelectors.js';

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectLoggedIn);

  if (isAuthenticated) {
    return <Navigate to="/account" />;
  }

  return children;
};

export default PublicRoute;