import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const TitleWrapper = styled.button`
  width: 195px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: #3e85f3;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    align-items: center;
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const ButtonLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  border: 1px solid ${({ bordercolor }) => bordercolor};
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  font-size: 20px;
  cursor: pointer;
  transition: color 250ms;

  &:hover {
    color: ${({ hovercolor }) => hovercolor};
  }

  @media screen and (min-width: 768px) {
    padding: 7px 9px;
  }
`;

export const ButtonRight = styled(ButtonLeft)`
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
