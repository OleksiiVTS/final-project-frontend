import styled from 'styled-components';

const textColor = {
  dark: '#FFFFFF',
  light: '#111111',
};
const elementBgColor = {
  dark: '#21222c',
  light: '#ffffff',
};

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

    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: calc(20 / 18); /* 111.111% */

    color: ${({ theme }) => textColor[theme]};

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: calc(24 / 20); /* 120% */
    }
  }

  & button {
    cursor: pointer;
    padding: 0;

    line-height: 0;
    border-radius: 50%;
    border: none;

    color: ${({ theme }) => textColor[theme]};
    background-color: ${({ theme }) => elementBgColor[theme]};
  }

  & button:hover {
    color: #2b78ef;
  }

  & svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
    fill: ${({ theme }) => elementBgColor[theme]};

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
