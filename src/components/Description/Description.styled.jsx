import styled from 'styled-components';

export const DescriptionSectionStyled = styled.section`
  padding: 64px 0px;
`;
export const DescriptionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 64px;

  & li {
    @media screen and (min-width: 1440px) {
      display: flex;
      gap: 228px;
      margin-left: 77px;
      align-items: center;
      &:nth-child(even) {
        flex-direction: row-reverse;
        margin-left: 0;
        margin-right: 77px;
      }
    }
  }

  & li > div {
    @media screen and (min-width: 375px) and (max-width: 767px) {
      max-width: 335px;
    }
    @media screen and (min-width: 768px) {
      max-width: 275px;
    }
  }

  & li:nth-child(even) > div {
    margin-left: auto;
  }
`;

export const ItemNumber = styled.div`
  font-weight: 700;
  font-size: 80px;
  letter-spacing: -2px;
  margin-bottom: 14px;

  color: #3e85f3;
`;

export const FeatureTitle = styled.h2`
  display: inline-flex;
  flex-direction: column;
  font-size: 20px;
  margin: 0;
  line-height: 1.25;
  text-transform: uppercase;
  color: #171820;

  @media screen and (min-width: 375px) {
    font-size: 32px;
    font-weight: 700;
  }
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const AccentWord = styled.span`
  padding: 8px 18px;
  border-radius: 44px;
  margin-bottom: 8px;
  background-color: #dcebf7;
  color: #3e85f3;
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin-bottom: 40px;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    margin-top: 24px;
  }
`;

export const FeatureImg = styled.picture`
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 604px;
  }
`;
