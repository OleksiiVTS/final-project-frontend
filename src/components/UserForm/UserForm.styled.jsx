import styled from 'styled-components';

export const UserFormBox = styled.div`
  width: 335px;
  position: relative;
  outline: 1px solid red;
  display: flex;
  padding: 59px 18px 40px 18px;
  flex-direction: column;
  border-radius: 16px;
  background: #fff;
  margin-top: 95px;
  justify-content: center;
`;
export const Avatar = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

export const UserName = styled.h1`
  color: #343434;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1; /* 100% */

  margin: 0;
  display: flex;
  justify-content: center;
`;

export const User = styled.h2`
  color: #343434;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */

  margin-top: 8px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const LabelUserForm = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.17; /* 116.667% */

  margin-bottom: 8px;
`;

export const InputUserForm = styled.input`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */

  margin-bottom: 18px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
`;

export const BtnUserForm = styled.button`
  width: 195px;
  height: 46px;

  display: flex;

  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  background: #3e85f3;
  border: none;
  color: #fff;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
`;
