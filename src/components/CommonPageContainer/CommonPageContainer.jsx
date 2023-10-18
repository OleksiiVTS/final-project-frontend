import styled from "styled-components";

export const CommonPageContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 24px 20px 20px 20px;
    /* border: 2px solid black; */
    background-color: #F7F6F9;

    @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 704px;
    padding: 24px 32px 32px 38px;
  }

  @media (min-width: 1440px) {
    width: 1087px;
    padding: 40px 32px 32px 32px;
  }
`;