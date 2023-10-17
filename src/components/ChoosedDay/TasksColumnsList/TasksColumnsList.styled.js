import styled from 'styled-components';

export const StyledTasksColumnsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 335px);
  /* grid-template-rows: repeat(auto-fit, 1fr); */
  /* grid-template-rows: 1fr; */
  grid-column-gap: 20px;
  grid-row-gap: 0px;

  overflow-x: auto;
  /* height: 100%; */
  /* height: 500px; */

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 344px);
    grid-column-gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    grid-column-gap: 27px;
  }
`;
