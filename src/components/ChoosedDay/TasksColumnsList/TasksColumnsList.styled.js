import styled from 'styled-components';

export const StyledTasksColumnsList = styled.div`
  display: flex;
  column-gap: 20px;

  /* width: 335px; */
  overflow-x: auto;

  @media screen and (min-width: 768px) {
    column-gap: 16px;
    /* width: 704px; */
  }

  @media screen and (min-width: 1440px) {
    column-gap: 27px;
    /* width: 1086px; */
  }
`;
