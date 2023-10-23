import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/authSelectors.js';
import { getCurrentDate } from 'utils/calendar';

const PublicRoute = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const currentDate = getCurrentDate();

  return !loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={`/calendar/month/${currentDate}`} />
  );
};

export default PublicRoute;
