import styled from '@emotion/styled/macro';
import { Field, Form } from 'formik';
// import { keyframes } from 'styled-components';

const styledForm = Form;
const styledField = Field;
const styledRadio = Field;

export const FormContainer = styled.div`
  box-sizing: border-box;
  padding: 0 10px 26px 10px;
`;

export const FormElement = styled(styledForm)``;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  line-height: 1.16;
  font-family: Inter;
`;

export const FormField = styled(styledField)`
  box-sizing: border-box;
  border-radius: 8px;
  border: 0;
  margin-bottom: 16px;
  padding: 14px 18px;
  background: #f6f6f6;
  color: #343434;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  width: 100%;

  &:focus {
    outline: none;
    border: 0;
  }

  &::placeholder {
    color: #343434;
  }
`;

export const TimeInput = styled(styledField)`
  box-sizing: border-box;
  border-radius: 8px;
  border: 0;
  margin-bottom: 16px;
  padding: 14px 18px;
  background: #f6f6f6;
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  max-width: 126px;

  &:focus {
    outline: none;
    border: 0;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &::placeholder {
    color: #343434;
  }

  @media screen and (min-width: 768px) {
    min-width: 163px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  column-gap: 15px;
  position: relative;
`;

export const TimeFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioBtn = styled(styledRadio)`
  opacity: 0;
  pointer-events: none;
`;

export const CustomRadioBtn = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  left: 1.3px;
  top: 3.3px;
  z-index: 3;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s;
    z-index: 2;
  }
`;

export const LowPrioBtn = styled(CustomRadioBtn)`
  &::after {
    content: '';
    background: #72c2f8;
  }
`;

export const MidPrioBtn = styled(CustomRadioBtn)`
  &::after {
    content: '';
    background: #f3b249;
  }
`;

export const HighPrioBtn = styled(CustomRadioBtn)`
  &::after {
    content: '';
    background: #ea3d65;
  }
`;

export const PriorityWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 32px;
`;

export const RadioLabel = styled.label`
  color: #343434;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  font-family: Inter;
  position: relative;
  cursor: pointer;
`;

export const CheckedRadioBtnBlue = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(114, 194, 248, 0.5);
  cursor: pointer;
  left: 0;
  top: 2px;
  z-index: 3;
  opacity: 0;
`;

export const CheckedRadioBtnYellow = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f3b24988;
  cursor: pointer;
  left: 0;
  top: 2px;
  z-index: 3;
  opacity: 0;
`;

export const CheckedRadioBtnRed = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ea3d658b;
  cursor: pointer;
  left: 0;
  top: 2px;
  z-index: 3;
  opacity: 0;
`;

export const RadioLabelStyled = styled(RadioLabel)`
  & ${RadioBtn}:checked + ${CheckedRadioBtnRed} {
    opacity: 1;
    transition: opacity 0.2s;
  }
  & ${RadioBtn}:checked + ${CheckedRadioBtnBlue} {
    opacity: 1;
    transition: opacity 0.2s;
  }
  & ${RadioBtn}:checked + ${CheckedRadioBtnYellow} {
    opacity: 1;
    transition: opacity 0.2s;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  column-gap: 14px;
`;

export const AddTaskButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3e85f3;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.17;
  border: 0;

  &:hover {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: background-color box-shadow 0.2s;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  border-radius: 8px;
  padding: 10px;
  color: #111;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 0;

  &:hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: box-shadow 0.2s;
  }
`;

export const Error = styled.p`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  color: red;
  position: absolute;
  width: 400px;
  bottom: 5px;
  left: 2px;
`;

export const BoxInput = styled.div`
  position: relative;
`;

export const StyledSVG = styled.svg`
  display: inline-block;
  margin-right: 8px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledEditBtn = styled.svg`
  text-align: center;
  margin-right: 8px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const BtnTxt = styled.span`
  display: inline-block;
`;
