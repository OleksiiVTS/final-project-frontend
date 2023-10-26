import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavBox = styled.div``;

export const NavTitle = styled.h4`
  margin: 0;
  margin-bottom: 32px;
  font-weight: 600;
  line-height: normal;
  color: ${({ color }) => color || 'rgba(52, 52, 52, 0.5)'};
`;

export const LogoBox = styled.div`
  /* color: #3e85f3; */
  color: ${({ color }) => color || '#3e85f3'};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  gap: 6px;

  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const MenuIcon = styled.img`
  width: 35px;

  @media screen and (min-width: 768px) {
    width: 60px;
    margin-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`;

export const CloseBurgerBtn = styled.button`
  background-color: inherit;
  border: none;
  color: #343434;
  justify-content: center;
  align-items: center;
  padding: 0;
  stroke: currentColor;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding-left: 20px;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  /* color: rgba(52, 52, 52, 0.5); */
  color: ${({ color }) => color || 'rgba(52, 52, 52, 0.5)'};
  font-size: 16px;
  font-weight: 600;

  & svg {
    stroke: currentColor;
    fill: none;
  }

  &.active {
    border-radius: 8px;
    color: ${({ activecolor }) => activecolor || '#3e85f3'};
    background: ${({ bgactivecolor }) => bgactivecolor || '#e3f3ff'};
  }
`;

export const NavItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
