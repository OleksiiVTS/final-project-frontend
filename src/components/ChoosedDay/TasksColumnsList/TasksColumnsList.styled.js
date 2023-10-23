import styled from 'styled-components';

export const StyledTasksColumnsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  @media screen and (min-width: 768px) {
    max-width: 1065px;
    overflow-x: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

export const StyledTasksColumnsList = styled.div`
  display: flex;
  column-gap: 20px;
  /* flex-wrap: wrap; */
  /* width: 100%; */
  width: 335px;
  /* overflow-x: auto; */

  @media screen and (min-width: 768px) {
    /* width: 100%; */
    column-gap: 16px;
    /* overflow-x: auto; */
  }

  @media screen and (min-width: 1440px) {
    column-gap: 16px;
    /* width: 1086px; */
  }
`;
