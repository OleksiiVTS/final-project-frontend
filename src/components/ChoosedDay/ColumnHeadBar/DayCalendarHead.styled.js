import styled from 'styled-components';

// export const StyledDayCalendarHead = styled.div``;

const elementBorderColor = {
  dark: 'rgba(255, 255, 255, 0.15)',
  light: 'rgba(220, 227, 229, 0.80)',
};

const elementBgColor = {
  dark: '#21222c',
  light: '#ffffff',
};

export const DayContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 1065px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

export const DayList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 14px 18px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => elementBorderColor[theme]};
  background-color: ${({ theme }) => elementBgColor[theme]};

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;
