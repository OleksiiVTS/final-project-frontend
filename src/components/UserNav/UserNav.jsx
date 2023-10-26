import React from 'react';
import {
  NavTitle,
  UserNavBox,
  LogoBox,
  StyledNavLink,
  NavItem,
  MenuIcon,
  CloseBurgerBtn,
  NavHeader,
} from './UserNav.styled.js';
import sprite from '../Pictures/sprite.svg';
import menuGoose from '../Pictures/menu-goose.svg';
import menuGooseDark from '../Pictures/menu-goose-dark.svg';

import { getCurrentDate } from 'utils/calendar';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';
import { useLocation } from 'react-router-dom';

const UserNav = ({ onCloseMenu }) => {
  const location = useLocation();
  const isMonthView = location.pathname.startsWith('/calendar/month');
  const currentDate = getCurrentDate();
  const theme = useSelector(selectTheme);

  return (
    <UserNavBox>
      <NavHeader>
        <LogoBox color={theme === 'dark' ? '#fff' : '#3e85f3'}>
          <MenuIcon
            src={theme === 'dark' ? menuGooseDark : menuGoose}
            alt="menu goose"
          ></MenuIcon>
          <p>
            G<em>oo</em>seTrack
          </p>
        </LogoBox>

        <CloseBurgerBtn onClick={onCloseMenu}>
          <svg width="34" height="34">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </CloseBurgerBtn>
      </NavHeader>
      <NavTitle
        color={
          theme === 'dark'
            ? 'var(--color-field-names-dark)'
            : 'rgba(52, 52, 52, 0.5)'
        }
      >
        User Panel
      </NavTitle>
      <ul>
        <NavItem onClick={onCloseMenu}>
          <StyledNavLink
            color={theme === 'dark' ? '#fff' : 'rgba(52, 52, 52, 0.5)'}
            activecolor={theme === 'dark' ? '#fff' : '#3e85f3'}
            bgactivecolor={
              theme === 'dark' ? 'var(--color-button-blue)' : '#e3f3ff'
            }
            to="/account"
          >
            <span>
              <svg width="24" height="24">
                <use href={sprite + '#icon-user'}></use>
              </svg>
            </span>
            <p>My Account</p>
          </StyledNavLink>
        </NavItem>

        <NavItem onClick={onCloseMenu}>
          <StyledNavLink
            color={theme === 'dark' ? '#fff' : 'rgba(52, 52, 52, 0.5)'}
            activecolor={theme === 'dark' ? '#fff' : '#3e85f3'}
            bgactivecolor={
              theme === 'dark' ? 'var(--color-button-blue)' : '#e3f3ff'
            }
            to={`/calendar/${isMonthView ? 'month' : 'day'}/${currentDate}`}
          >
            <span>
              <svg width="24" height="24">
                <use href={sprite + '#icon-calendar'}></use>
              </svg>
            </span>
            <p>Calendar</p>
          </StyledNavLink>
        </NavItem>

        <NavItem onClick={onCloseMenu}>
          <StyledNavLink
            color={theme === 'dark' ? '#fff' : 'rgba(52, 52, 52, 0.5)'}
            activecolor={theme === 'dark' ? '#fff' : '#3e85f3'}
            bgactivecolor={
              theme === 'dark' ? 'var(--color-button-blue)' : '#e3f3ff'
            }
            to="/statistics"
          >
            <span>
              <svg width="24" height="24">
                <use href={sprite + '#icon-statistics'}></use>
              </svg>
            </span>
            <p> Statistics</p>
          </StyledNavLink>
        </NavItem>
      </ul>
    </UserNavBox>
  );
};

export default UserNav;
