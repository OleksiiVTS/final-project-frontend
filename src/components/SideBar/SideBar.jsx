import React from 'react';
import UserNav from '../UserNav/UserNav.jsx';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { SideBarBox } from './SideBar.styled.js';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice.js';

const SideBar = () => {
  const theme = useSelector(selectTheme)
  return (
  <SideBarBox bg={theme === 'dark' ? '#000' : '#fff'}>
    <UserNav />
    <LogoutBtn/>
  </SideBarBox>
)
};

export default SideBar;
