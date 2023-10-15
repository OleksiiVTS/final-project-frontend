import React from 'react';
import UserNav from '../UserNav/UserNav.jsx'; // Імпортуйте компонент UserNav
import LogoutBtn from '../LogoutBtn/LogoutBtn'; // Імпортуйте компонент LogoutBtn

const SideBar = () => (
  <div>
    <h2>GooseTrack</h2>
    <UserNav />
    <LogoutBtn />
  </div>
);

export default SideBar;
