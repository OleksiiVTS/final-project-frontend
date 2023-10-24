import styled from '@emotion/styled';

export const StatsPageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto;
  margin-bottom: 46px; */
  padding-top: 28px;
  /* padding-left: 14px;
  padding-right: 14px; */
  padding-bottom: 135px;
  border-radius: 16px;

  background: ${({ bg }) => bg || 'var(--color-choice-dark-no-active)'};
  color: ${({ color }) => color || '#000'};

  @media screen and (min-width: 768px) {
    padding-top: 132px;
    /* padding-left: 32px;
    padding-right: 32px; */
    padding-bottom: 224px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 134px;
    /* padding-right: 113px;
    padding-left: 113px; */
    padding-bottom: 104px;
  }
`;
export const StatsContainer = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  min-width: 307px;
  margin-top: 80px;

  border: 0.8px solid #e3f3ff;
  border-radius: 29px;
  @media screen and (max-width: 768px) {
    /* max-width: 307px; */
    height: auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 640px;
    height: 424px;
  }
  @media screen and (min-width: 768px) {
    max-width: 1065px;
    height: auto;
  }
`;
export const WrapperDiagram = styled.svg`
  max-width: 307px;
  height: auto;

  @media screen and (max-width: 767px) {
    max-width: 640px;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 860px;
    height: auto;
  }
`;
