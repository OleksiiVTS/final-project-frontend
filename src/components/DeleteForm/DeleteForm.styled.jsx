import styled from '@emotion/styled/macro';

export const DeleteBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3e85f3;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 0;

  &:hover {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: background-color box-shadow 0.2s;
  }
`;

export const CancelBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  border-radius: 8px;
  padding: 10px;
  color: #111;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 0;

  &:hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: box-shadow 0.2s;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  margin-bottom: 14px;
`;

export const TextDiv = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
  text-align: center;
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
`;
