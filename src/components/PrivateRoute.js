import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

const PrivateRoute = () => {
  const IsToken = useSelector(selectToken);
  return IsToken ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRoute;
