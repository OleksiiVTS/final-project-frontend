import styled from '@emotion/styled';
import { CommonPageContainer } from 'components/CommonPageContainer/CommonPageContainer';
import Header from 'components/Header/Header';

import React from 'react';

const DesktopPageContainer = styled.div`
  display: flex;
  width: 1440px;
  align-items: start;
  margin: 0 auto;
`
const Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: blue;
`

const TestPage = () => {
  let width = window.innerWidth;
  console.log(width);
  
    if (width > 1439) {
  return (
    <DesktopPageContainer>
      <Sidebar></Sidebar>
    <CommonPageContainer>      
      <Header />
    </CommonPageContainer>
    </DesktopPageContainer>
    );
    } else {
      return (
      <CommonPageContainer>      
      <Header />
    </CommonPageContainer>
    )}
};

export default TestPage;
