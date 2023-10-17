import React from 'react';
import { logoutUser } from '../../redux//auth/authOperations';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import sprite from '../Pictures/sprite.svg';

const LogoutButton = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  padding: 16px;
  border-radius: 16px;
  width: 140px;

  border: 1px solid transparent;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  font-size: 18px;
  font-weight: 600;
  background-color: #3e85f3;
  color: #ffffff;

  &svg {
    width: 20px;
    height: 20px;
    stroke: #ffffff;
    fill: white;
  }

  &:hover {
    background-color: #2b78ef;
  }
  &:focus {
    background-color: #2b78ef;
  }
`;

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <LogoutButton type="submit" onClick={handleLogout}>
      Log out
   
        <svg width="20" height="20">
          <use href={sprite + '#icon-logout'}></use>
        </svg>
    
    </LogoutButton>
  );
};

export default LogoutBtn;
