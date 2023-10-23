import styled from 'styled-components';

const sectionBgColor = {
  dark: '#171820',
  light: '#F7F6F9',
};

const sectionBorderColor = {
  dark: 'rgba(255, 255, 255, 0.15)',
  light: 'rgba(220, 227, 229, 0.80);',
};

const textColor = {
  dark: '#FFFFFF',
  light: '#111111',
};

export const StyledTaskColumnCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 14px 18px;

  min-height: 108px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => sectionBorderColor[theme]};
  background-color: ${({ theme }) => sectionBgColor[theme]};

  & .title,
  .time {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${({ theme }) => textColor[theme]};
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285; /* 128.571% */
  }

  & .time {
    text-align: center;
  }

  & .time span:first-child {
    margin-right: 5px;
  }
  & .time span:last-child {
    margin-left: 5px;
  }
`;
