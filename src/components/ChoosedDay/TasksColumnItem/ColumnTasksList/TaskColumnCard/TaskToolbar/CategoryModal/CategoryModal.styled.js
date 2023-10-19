import styled from 'styled-components';

export const StyledCategoryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.8); */

  & .modal {
    position: absolute;
    top: ${({ coords }) => coords.clientY + 15 + 'px'};
    left: ${({ coords }) => coords.clientX - 5 + 'px'};

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 12px;

    width: 148px;
    height: 90px;

    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px;

    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2857; /* 128.571% */

    color: #343434;
    border: none;
    background-color: #fff;
  }

  & button:hover {
    color: #3e85f3;
  }

  & button span {
    line-height: 0;
  }
  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: #f7f6f9;

    @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
