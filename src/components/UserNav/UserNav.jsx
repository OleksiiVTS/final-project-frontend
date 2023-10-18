import React from 'react';
import {
  NavTitle,
  UserNavBox,
  LogoBox,
  StyledNavLink,
  NavItem,
} from './UserNav.styled';
import sprite from '../Pictures/sprite.svg';
import menuGoose from '../Pictures/menu-goose.svg';

import { getCurrentDate } from 'utils/calendar';

const UserNav = () => {
  const currentDate = getCurrentDate();

  return (
    <UserNavBox>
      <LogoBox>
        <span>
          <img src={menuGoose} alt="menu goose" />
        </span>
        <p>
          G<em>oo</em>seTrack
        </p>
      </LogoBox>
      <NavTitle>User Panel</NavTitle>
      <ul>
        <NavItem>
          <StyledNavLink to="/account">
            <span>
              <svg width="24" height="24">
                <use href={sprite + '#icon-user'}></use>
              </svg>
            </span>
            <p>My Account</p>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to={`/calendar/month/${currentDate}`}>
            {/* <StyledNavLink to={`/calendar/month/2023-12-31`}> */}
            <span>
              <svg width="24" height="24">
                <use href={sprite + '#icon-calendar'}></use>
              </svg>
            </span>
            <p>Calendar</p>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/statistics">
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
