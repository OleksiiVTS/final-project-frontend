import styled from 'styled-components';

export const StyledColumnTasksList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-bottom: 32px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    row-gap: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
