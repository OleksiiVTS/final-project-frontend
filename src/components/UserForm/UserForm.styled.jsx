import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';

export const LabelAvatar = styled.label`
  @media screen and (min-width: 768px) {
    display: block;
    width: 124px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Icon = styled(AiFillPlusCircle)`
  fill: #3e85f3;
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Chevron = styled.svg`
  cursor: pointer;
  pointer-events: none;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FormaBox = styled.form`
  /* width: 100vh; */
  height: 100vh;

  /* padding: 95px 20px 40px 20px; */
  /* background-color: #f7f6f9; */
  @media screen and (min-width: 768px) {
    /* padding: 64px 32px 38px 32px; */
  }
  @media screen and (min-width: 1440px) {
    /* padding: 33px 32px 32px 32px; */
  }
`;
export const UserFormBox = styled.div`
  width: 335px;
  position: relative;

  display: flex;
  padding: 59px 18px 40px 18px;
  flex-direction: column;
  border-radius: 16px;
  background: ${({ bg }) => bg || 'var(--color-choice-dark-no-active)'};
  color: ${({ color }) => color || '#000'};

  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 40px 175px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 60px 165px;
  }
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 50px;
  row-gap: 24px;
  box-sizing: border-box;
  @media screen and (min-width: 1440px) {
    height: 270px;
    width: 758px;
    flex-wrap: wrap;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  width: 72px;
  height: 72px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #3e85f3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: relative;
    left: 0;
    transform: translate(0, 0);
    width: 124px;
    height: 124px;
  }
`;

export const IconDiv = styled.button`
  position: absolute;
  top: 25px;
  left: 52%;
  z-index: 2;
  cursor: pointer;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    top: 150px;
    left: 51%;
  }
  @media screen and (min-width: 1440px) {
    top: 168px;
    left: 51%;
  }
`;
export const WhiteBox = styled.div`
  position: absolute;
  top: 29.5px;
  left: 53.2%;
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
  z-index: 1;
  @media screen and (min-width: 768px) {
    top: 156.5px;
    left: 52%;
    width: 10px;
    height: 10px;
  }
  @media screen and (min-width: 1440px) {
    top: 175px;
    left: 51.7%;
  }
`;
export const UserName = styled.h1`
  color: ${({ color }) => color || '#343434'};

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1; /* 100% */

  margin: 0;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 14px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const User = styled.h2`
  color: ${({ color }) => color || '#343434'};

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */

  margin-top: 8px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const LabelUserForm = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.17; /* 116.667% */
  display: block;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29; /* 128.571% */
  }
`;

export const InputUserForm = styled.input`
  box-sizing: border-box;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
  color: ${({ color }) => color || '#000'};
  background: ${({ bg }) => bg || '#fff'};
  padding: 12px 14px;
  border-radius: 8px;
  width: 100%;
  border: 1px solid
    ${({ bordercolor }) => bordercolor || 'rgba(17, 17, 17, 0.1)'};

  @media screen and (min-width: 768px) {
    padding: 13px 18px;
    width: 354px;
    font-size: 16px;
    line-height: 1.12; /* 112.5% */
  }
  @media screen and (min-width: 1440px) {
    width: 354px;
  }
`;

export const BtnUserForm = styled.button`
  width: 195px;
  height: 46px;

  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  background: #3e85f3;
  border: none;
  color: #fff;
  margin-top: 40px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
  &:hover {
    background-color: #2b78ef;
  }
  &:focus {
    background-color: #2b78ef;
  }
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    margin-top: 18px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 88px;
  }
`;

export const Error = styled.p`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  color: red;
  position: absolute;
  width: 400px;
  bottom: -12px;
  left: 10px;
`;

export const FieldWrap = styled.div`
  position: relative;
`;

export const FieldWrapDate = styled.div`
  position: relative;

  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const SVGWrap = styled.div`
  width: 20px;
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 200px;
  height: 10px;
  text-align: right;
  padding-right: 20px;
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  width: 28px;
  heigh: 28px;
  justify-content: center;
  align-items: center;
  background: rgb(234, 61, 101);
  border-radius: 8px;
  padding: 6px;
  color: #f8f8f8;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: box-shadow 0.2s;
  }

  @media screen and (min-width: 768px) {
    top: 32px;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    top: 48px;
    right: 48px;
  }
`;

export const StyledDeleteIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #ffffff;
  fill: #ffffff;
`;
