import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavBox = styled.div``;

export const NavTitle = styled.h4`
  margin: 0;
  margin-bottom: 32px;
  font-weight: 600;
  line-height: normal;
`;

export const LogoBox = styled.section`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  padding-left: 20px;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(52, 52, 52, 0.5);
  font-size: 16px;
  font-weight: 600;

  & svg {
    stroke: currentColor;
    fill: none;
  }

  &.active {
    color: #3e85f3;
    border-radius: 8px;
    background: #e3f3ff;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
