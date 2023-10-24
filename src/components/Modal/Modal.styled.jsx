import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;

  background-color: #f7f6f960;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 5;
  box-sizing: border-box;
  min-width: 240px;
  padding: 14px;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background-color: ${({ bg }) => bg || '#fff'};
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media screen and (max-width: 767px) {
    max-width: 365px;
  }

  @media screen and (min-width: 768px) {
    max-width: 468px;
    padding: 18px;
  }
`;

export const CloseBtnContainer = styled.div`
  text-align: right;
`;

export const CloseBtn = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  /* background-color: white; */
  background-color: ${({ bg }) => bg || '#fff'};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }
`;
