import styled from 'styled-components';

export const StyledDayCalendarHead = styled.div``;

export const MobileDaysList = styled.ul`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  height: 50px;
  margin-bottom: 14px;
  padding: 16px 16px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DesktopDayList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 10px 32px;

    border-radius: 8px;
    border: 1px solid ${({ borderColor }) => borderColor};
    background-color: ${({ bgColor }) => bgColor};
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

export const WorkDay = styled.li`
  display: flex;
  flex-direction: column;

  & span {
    margin-bottom: 4px;

    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(18 / 14);
    text-align: center;
    text-transform: uppercase;

    color: ${({ color }) => (color === '#ffffff' ? '#FAFAFA4D' : color)};
  }

  & button {
    padding: 4px 8px;

    color: ${({ color }) => color};
    background-color: transparent;

    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: calc(18 / 16);

    border-radius: 8px;
    border: none;

    cursor: pointer;
  }

  & button:hover,
  .current {
    color: #ffffff;
    background-color: #3e85f3;
  }
`;

export const WeekendDay = styled(WorkDay)`
  color: #3e85f3;
`;
