import styled from 'styled-components';

// export const StyledDayCalendarHead = styled.div``;

export const DayList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 14px 18px;

  border-radius: 8px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;
