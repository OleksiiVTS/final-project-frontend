import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../images/login-icon.svg';

export const AuthSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #3e85f3;
`;
export const MainGoose = styled.img`
  width: 142px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const MainHeader = styled.h1`
  color: #ffffff;
  font-size: 25px;
  line-height: 1.09;
  margin-bottom: 32px;
  margin-top: 2px;

  @media screen and (min-width: 375px) {
    font-weight: 7000;
    font-size: 44px;
  }
  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
    margin-bottom: 55.5px;
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    font-size: 120px;
  }
`;

export const ItalicLeters = styled.span`
  font-style: italic;
  margin-right: 2px;
  @media screen and (min-width: 375px) {
    margin-right: 5px;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;
export const LoginLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  background-color: #fff;
  color: #3e85f3;
  box-shadow: 4px 2px 16px 0px #88a5bf7a;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 4px 2px 20px 0px #29394679;
  }
`;

export const LoginIcon = styled(Icon)``;

export const SignupLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: 12px;
  background-image: linear-gradient(
    to right,
    currentColor 100%,
    currentColor 100%
  );
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 1px;
  color: #ffffff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    box-shadow: 4px 2px 16px 0px #88a5bf7a;
  }
`;
