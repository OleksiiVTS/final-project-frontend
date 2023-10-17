import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerNotFoundPage = styled.div`
  display: block;
  width: 100vh;
  height: 100vh;
  background-color: #f7f6f9;
`;

export const BoxNotFoundPage = styled.div`
  width: 281px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 503px;
  }
`;

export const TitleNotFoundPage = styled.h1`
  font-family: Inter;
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0em;
  margin: 0;
  text-align: left;
  color: #3e85f3;
  text-shadow: 0px 9.4px 57.7px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25; /* 125% */
  }
`;

export const ImagePosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 252px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 503px;
  }
`;
export const Image = styled.img`
  transform: rotate(-31.56deg);

  width: 81px;
  height: 188px;

  @media (min-width: 768px) {
    width: 178px;
    height: 414px;
  }
  @media (min-width: 1440px) {
  }
`;

export const Text404 = styled.p`
  color: rgba(17, 17, 17, 0.7);

  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
  width: 281px;
  margin-top: 28px;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 387px;
    margin-top: 0px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  margin-top: 24px;
  padding: 14px 32px;
  border-radius: 16px;
  border: 1px solid transparent;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  background-color: #3e85f3;

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
    margin-top: 32px;
    padding: 16px 48px;
  }
`;
export const BackHome = styled(NavLink)`
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  color: #ffffff;
  letter-spacing: -0.28px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;
