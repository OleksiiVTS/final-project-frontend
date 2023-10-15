//all comments should be uncomment after finished backend

import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  // const logedIn = useSelector(selectLoggedIn);
  const logedIn = true;

  return logedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
