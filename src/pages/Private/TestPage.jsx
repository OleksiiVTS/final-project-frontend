import styled from '@emotion/styled';
import { CommonPageContainer } from 'components/CommonPageContainer/CommonPageContainer';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/theme/themeSlice';

const DesktopPageContainer = styled.div`
  display: flex;
  width: 1440px;
  align-items: start;
  margin: 0 auto;
`
// const Sidebar = styled.div`
//   width: 300px;
//   height: 100vh;
//   background-color: blue;
// `

const TestPage = () => {
  const theme = useSelector(selectTheme);
  let width = window.innerWidth;
  console.log(width);
  
    if (width > 1439) {
  return (
    <DesktopPageContainer>
      <SideBar></SideBar>
    <CommonPageContainer bg={theme !== 'dark' ? '#F7F6F9' : '#c500a8'}
          color={theme === 'dark' ? '#fff' : '#000'}>      
      <Header />
    </CommonPageContainer>
    </DesktopPageContainer>
    );
    } else {
      return (
        <CommonPageContainer bg={theme !== 'dark' ? '#F7F6F9' : '#c500a8'}
        color={theme === 'dark' ? '#fff' : '#000'}>       
      <Header />
    </CommonPageContainer>
    )}
};

export default TestPage;
