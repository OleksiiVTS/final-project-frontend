import styled from 'styled-components';

const weeksDayTitleColor = {
  dark: '#FAFAFA4D',
  light: '#343434',
};

const weeksDayNumberColor = {
  dark: '#ffffff',
  light: '#343434',
};

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

    color: ${({ theme }) => weeksDayTitleColor[theme]};
  }

  & button {
    padding: 4px 8px;

    color: ${({ theme }) => weeksDayNumberColor[theme]};
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
    background-color: #2b78ef;
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
