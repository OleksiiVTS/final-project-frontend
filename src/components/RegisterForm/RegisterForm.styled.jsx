import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';

const styledForm = Form;
const styledField = Field;
const navLink = NavLink;

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #dcebf7;
  overflow: hidden;
`;

export const FormPosition = styled.div`
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RegisterContainer = styled.div`
  padding: 24px 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 8px;
  @media screen and (min-width: 335px) and (max-width: 767px) {
    box-sizing: border-box;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    max-width: 480px;
    padding: 40px 40px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 32px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: #3e85f3;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  position: relative;
`;

export const FormStyled = styled(styledForm)`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.29;
  color: #111111;
  
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FormField = styled(styledField)`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  margin-bottom: 4px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #111111;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #dce3e599;   
  

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }

  ::placeholder {
    color: #dce3e5;
  }
`;

export const CorrectInput = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  color: #3cbc81;
`;

export const Error = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  color: #e74a3b;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const InputIconName = styled.div`
  position: absolute;
  top: 40%;
  left: 88%;
`;

export const InputIconEmail = styled.div`
  position: absolute;
  top: 40%;
  left: 88%;
`;

export const InputIconPassword = styled.div`
  position: absolute;
  top: 40%;
  left: 88%;
`;

export const RegButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  padding: 14px 0;
  border: 1px solid transparent;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  font-size: 14px;
  background-color: #3e85f3;
  color: #ffffff;
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

export const GoogleBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  padding: 14px 0;
  border: 1px solid transparent;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  font-size: 14px;
  background-color: #3e85f3;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #2b78ef;
  }
  &:focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    margin-top: 15px;
    font-size: 18px;
  }
`;

export const LogIn = styled(navLink)`
  display: block;
  margin-top: 18px;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  color: #3e85f3;
  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ImagePosition = styled.div`
  position: relative;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: -90px;
    right: 520px;
    width: 368px;
    height: auto;
    overflow: hidden;
  }
`;
