import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: #555aaa;
  padding-top: 29px;
  padding-bottom: 29px;
  border-top: 2px solid lime;
`;

export const FooterContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    padding-bottom: 60px;
  }
`;

export const FooterText = styled.p`
  max-width: 240px;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  line-height: 2em;
  color: greenyellow;
`;

export const HeartIcon = styled.svg`
  fill: red;
`;

export const StudentsText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  &:hover,
  &:focus {
    color: blueviolet;
  }
`;
