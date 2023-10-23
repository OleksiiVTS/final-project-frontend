import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsRefreshing, selectLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const IsRefreshing = useSelector(selectIsRefreshing);
  console.log(loggedIn);
  return !IsRefreshing ?? loggedIn ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
