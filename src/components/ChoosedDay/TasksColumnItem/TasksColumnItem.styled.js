import styled from 'styled-components';

const elementBorderColor = {
  dark: 'rgba(255, 255, 255, 0.15)',
  light: 'rgba(220, 227, 229, 0.80)',
};

const elementBgColor = {
  dark: '#21222c',
  light: '#ffffff',
};

export const StyledTasksColumnItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 18px 18px 20px;
  min-width: 334px;
  height: 100%;
  max-height: 568px;
  overflow-y: auto;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => elementBorderColor[theme]};
  background-color: ${({ theme }) => elementBgColor[theme]};

  @media screen and (min-width: 768px) {
    padding: 20px 20px 20px;
    min-width: 344px;
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
