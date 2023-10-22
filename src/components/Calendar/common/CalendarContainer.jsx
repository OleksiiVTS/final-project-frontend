import styled from 'styled-components';

const CalendarContainer = styled.div`
  /* width: 1151px; */
  /* height: 100%; */
  padding-inline: 20px;
  padding-bottom: 52px;
  background-color: ${({ bgcolor }) => bgcolor};
  /* background-color: #f7f6f9; */

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
    padding-bottom: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 1151px;
    padding-bottom: 32px;
  }
`;

export default CalendarContainer;
