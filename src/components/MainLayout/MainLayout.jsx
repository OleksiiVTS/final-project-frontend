import React from 'react';
import SideBar from '../SideBar/SideBar.jsx';
// import Header from '../Header/Header.jsx';
// import { Link } from 'react-router-dom';

import { Section } from './MainLayout.styled.jsx';

const MainLayout = ({ children }) => {
  return (
    <Section>
      {/* <h1> MainLayout</h1> */}
      <SideBar />
      {/* <Header /> */}
      {children}
    </Section>
  );
};

export default MainLayout;
