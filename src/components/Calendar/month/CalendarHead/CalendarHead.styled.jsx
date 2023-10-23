import styled from 'styled-components';

export const MonthCalendarHeadStyles = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 1065px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

export const MobileDaysList = styled.ul`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  height: 50px;
  margin-bottom: 14px;
  padding: 16px 16px;
  border: 1px solid ${({ bordercolor }) => bordercolor};
  border-radius: 8px;
  background-color: ${({ bgcolor }) => bgcolor};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DesktopDayList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    /* gap: 62px; */
    /* width: 100%; */
    height: 46px;
    margin-bottom: 18px;
    padding: 14px 40px;
    border: 1px solid ${({ bordercolor }) => bordercolor};
    border-radius: 8px;
    background-color: ${({ bgcolor }) => bgcolor};

    @media screen and (min-width: 1440px) {
      /* gap: 122px; */
      height: 46px;
      margin-bottom: 15px;
      padding: 14px 60px;
    }
  }
`;

export const WorkDay = styled.li`
  /* width: calc(100% / 7); */
  color: ${({ color }) => color};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);
  text-align: center;
  text-transform: uppercase;
`;

export const WeekendDay = styled(WorkDay)`
  color: #3e85f3;
`;
