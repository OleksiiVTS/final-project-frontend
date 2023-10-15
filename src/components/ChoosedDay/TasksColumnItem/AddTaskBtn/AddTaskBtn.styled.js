import styled from 'styled-components';

export const StyledAddTaskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 299px;
  height: 48px;
  padding: 16px 20px;

  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: #e3f3ff;

  color: #111;
  /* text-align: center; */
  font-family: Inter;
  font-size: 14px;
  /* font-style: normal; */
  font-weight: 600;
  line-height: 1.285; /* 128.571% */

  & span {
    line-height: 0;
    margin-right: 8px;
  }

  & svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: white;
  }

  &:hover {
    color: white;
    border: 1px solid #3e85f3;
    background: #3e85f3;
  }
`;
