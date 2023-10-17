import React from 'react';
import UserNav from '../UserNav/UserNav.jsx';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { SideBarBox } from './SideBar.styled.jsx';

const SideBar = () => (
  <SideBarBox>
    <UserNav />
    <LogoutBtn />
  </SideBarBox>
);

export default SideBar;
