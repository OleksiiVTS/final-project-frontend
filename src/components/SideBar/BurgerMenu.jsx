import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSidebarModalOpen,
  changeSidebarModalOpen,
  selectTheme,
} from 'redux/header/headerSlice';

import UserNav from '../UserNav/UserNav.jsx';
import LogoutBtn from '../LogoutBtn/LogoutBtn';

const BurgerMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 290px;
  height: 100%;
  background-color: ${({ bg }) => bg || '#fff'};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: ${({ open }) => (open ? 'block' : 'none')};
  overflow: hidden;
`;

const BurgerContainer = styled.div`
  border-right: 1px solid rgba(220, 227, 229, 0.5);

  height: 100vh;
  min-width: 290px;
  padding: 32px 24px 24px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(52, 52, 52, 0.5);
`;

const BurgerMenu = () => {
  const sidebarModalStatus = useSelector(selectSidebarModalOpen);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const closeBurgerMenu = () => {
    dispatch(changeSidebarModalOpen(false));
  };

  useEffect(() => {
    if (sidebarModalStatus) {
      document.body.style.overflow = 'hidden';

      const handleEscape = event => {
        if (event.key === 'Escape') {
          closeBurgerMenu();
        }
      };

      window.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  });

  return (
    <>
      <BackgroundOverlay open={sidebarModalStatus} onClick={closeBurgerMenu} />
      <BurgerMenuWrapper
        bg={theme === 'dark' ? '#000' : '#fff'}
        open={sidebarModalStatus}
      >
        <BurgerContainer>
          <UserNav onCloseMenu={closeBurgerMenu} />
          <LogoutBtn />
        </BurgerContainer>
      </BurgerMenuWrapper>
    </>
  );
};

export default BurgerMenu;
