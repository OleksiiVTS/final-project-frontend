import styled from 'styled-components';

const textColor = {
  dark: '#FFFFFF',
  light: '#111111',
};

const bgColor = {
  dark: '#3E85F3',
  light: '#E3F3FF',
};

export const StyledAddTaskBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 299px;
  height: 48px;
  padding: 16px 20px;

  border-radius: 8px;
  border: 1px dashed #3e85f3;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14); /* 128.571% */

  color: ${({ theme }) => textColor[theme]};
  background-color: ${({ theme }) => bgColor[theme]};

  & span {
    line-height: 0;
    margin-right: 8px;
  }

  & svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    /* fill: white; */
  }

  &:hover {
    color: white;
    border: 1px solid #2b78ef;
    background-color: #2b78ef;
  }
`;
