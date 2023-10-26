import styled from 'styled-components';

const textColor = {
  dark: '#FFFFFF',
  light: '#111111',
};

const elementBorderColor = {
  dark: 'rgba(255, 255, 255, 0.15)',
  light: 'rgba(220, 227, 229, 0.80)',
};

const elementBgColor = {
  dark: '#21222c',
  light: '#ffffff',
};

export const StyledCategoryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* background-color: rgba(0, 0, 0, 0.8); */

  & .modal {
    position: absolute;
    top: ${({ coords }) => coords.clientY + 15 + 'px'};
    left: ${({ coords }) => coords.clientX - 40 + 'px'};

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 12px;

    width: 148px;
    height: 90px;

    border-radius: 8px;
    background: ${({ theme }) => elementBgColor[theme]};
    box-shadow: 0px 4px 16px 0px ${({ theme }) => elementBorderColor[theme]};
  }

  & button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px;

    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14); /* 128.571% */

    color: ${({ theme }) => textColor[theme]};
    border: none;
    background-color: ${({ theme }) => elementBgColor[theme]};
  }

  & button:hover {
    color: #2b78ef;
  }

  & button span {
    line-height: 0;
  }
  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: ${({ theme }) => elementBgColor[theme]};

    @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
