import styled from 'styled-components';

export const StyledTasksColumnItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 18px 18px 20px;
  /* min-width: 335px;
  min-height: 155px; */

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;

  @media screen and (min-width: 768px) {
    padding: 20px 20px 20px;
  }

  @media screen and (min-width: 1440px) {
  }

  .columnHeadBar {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 28px;
    }
  }
`;
