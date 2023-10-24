import styled from 'styled-components';

export const StarColors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

export const RaitngContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RaitingStars = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RaitingTextarea = styled.textarea`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  padding: 10;
  margin: 20px 0;
  min-height: 100;
  width: 300;
`;

export const RaitingButton = styled.button`
  border: 1px solid #a9a9a9;
  width: 300px;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
`;
