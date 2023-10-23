import styled from 'styled-components';

const sectionBgColor = {
  dark: '#171820',
  light: '#F7F6F9',
};

export const StyledChoosedDay = styled.div`
  /* padding: 24px 20px 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: auto; */

  /* height: 100%; */
  /* height: 600px; */

  background: ${({ theme }) => sectionBgColor[theme]};

  @media screen and (min-width: 768px) {
    /* padding: 24px 32px 18px; */
  }

  @media screen and (min-width: 1440px) {
    /* padding: 32px 32px 18px; */
  }

  .DayCalendarHead {
    margin-bottom: 16px;
  }
`;
