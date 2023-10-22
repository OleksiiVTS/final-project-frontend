import styled from 'styled-components';

export const StyledDayListItem = styled.li`
  display: flex;
  flex-direction: column;

  & span {
    margin-bottom: 4px;

    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(18 / 14);
    text-align: center;
    text-transform: uppercase;

    color: ${({ color }) => (color === '#ffffff' ? '#FAFAFA4D' : color)};
  }

  & button {
    padding: 4px 8px;

    color: ${({ color }) => color};
    background-color: transparent;

    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: calc(18 / 16);

    border-radius: 8px;
    border: none;

    cursor: pointer;
  }

  & button:hover,
  .current {
    color: #ffffff;
    background-color: #3e85f3;
  }

  & .tablet {
    display: none;
  }

  @media screen and (min-width: 768px) {
    & .tablet {
      display: block;
    }

    & .mobile {
      display: none;
    }
  }
`;
