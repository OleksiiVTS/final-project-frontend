import styled from 'styled-components';

export const StyledColumnHeadBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 34px;

  @media screen and (min-width: 768px) {
    height: 38px;
  }

  & h3 {
    margin: 0;
    color: #111;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.111; /* 111.111% */

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.2; /* 120% */
    }
  }

  & button {
    /* width: 22px; */
    /* height: 22px; */
    line-height: 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: #111;
    background-color: white;
  }

  & button:hover {
    color: #3e85f3;
  }

  & svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
    fill: white;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
