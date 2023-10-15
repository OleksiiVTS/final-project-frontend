import React from 'react';
import { logoutUser } from '../../redux//auth/authOperations';
import { useDispatch } from 'react-redux';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="logout-btn">
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default LogoutBtn;
