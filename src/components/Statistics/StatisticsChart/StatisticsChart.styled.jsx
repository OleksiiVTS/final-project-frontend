import styled from '@emotion/styled';

export const StatsPageBox = styled.div`
  max-width: 767px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 46px;
  padding-top: 28px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 135px;
  border-radius: 16px;

  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 1440px;
    padding-top: 132px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 224px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding-top: 134px;
    padding-right: 113px;
    padding-left: 113px;
    padding-bottom: 104px;
  }
`;
export const StatsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;

  border: 0.8px solid #e3f3ff;
  border-radius: 29px;
`;
