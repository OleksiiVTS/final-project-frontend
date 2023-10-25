import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ModalStyled = styled.div`
  position: relative;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  background-color: #78ddff9e;

  @media screen and (min-width: 50px) {
    width: 280px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 100vw;
    margin: 0 auto;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 28px;
  right: 12px;
  cursor: pointer;
  stroke: #090909;

  &:hover,
  &:focus {
    fill: #060249;
  }
`;
