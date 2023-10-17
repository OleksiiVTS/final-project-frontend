import styled from 'styled-components';

export const StyledTaskToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  & .infoWrapper {
    display: flex;
    align-items: end;
  }

  & .imgWrapper {
    overflow: hidden;
    margin-right: 8px;

    width: 32px;
    height: 32px;

    border-radius: 50%;
    border: 1.8px solid #3e85f3;
    /* background: url(<path-to-image>), lightgray 50% / cover no-repeat; */

    & img {
      margin-left: -1px;
      margin-top: -1px;
      width: 32px;
      height: 32px;
    }
  }

  & span {
    padding: 4px 12px;

    color: #fff;

    font-family: Inter;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2; /* 120% */

    border-radius: 4px;
    background: ${props => props.priority};
  }

  .controlsWrapper {
    line-height: 0;
  }
  & button {
    line-height: 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: #111;
    background-color: #f7f6f9;
  }

  & button:not(:last-child) {
    margin-right: 10px;
  }

  & button:hover {
    color: #3e85f3;
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
