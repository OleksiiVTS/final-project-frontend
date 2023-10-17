import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  font-family: Inter;
  font-size: 100px;
  font-weight: 700;
  line-height: 150px;
  letter-spacing: 0em;
  margin: 0;
  text-align: left;
  color: #3e85f3;
`;

export const ImagePosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 252px;
  margin-left: auto;
  margin-right: auto;
`;
export const Image = styled.img`
  /* @media screen and (max-width: 1439px) {
    display: none;
  } */

  transform: rotate(-31.56deg);

  @media screen and (max-width: 375px) {
    width: 81px;
    height: 188px;
  }
  @media (min-width: 768px) {
    width: 178px;
    height: 414px;
  }
  @media (min-width: 1440px) {
  }
`;

export const BackButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  padding: 14px 0;
  border-radius: 16px;
  border: 1px solid transparent;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  font-size: 14px;
  background-color: #3e85f3;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  &:hover {
    background-color: #2b78ef;
  }
  &:focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    font-size: 18px;
  }
`;
export const BackHome = styled(NavLink)`
  display: block;
  margin-top: 18px;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.17;
  color: #ffffff;

  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
