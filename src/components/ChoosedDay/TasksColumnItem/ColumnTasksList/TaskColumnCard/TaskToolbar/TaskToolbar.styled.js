import styled from 'styled-components';

const textColor = {
  dark: '#FFFFFF',
  light: '#111111',
};

const sectionBgColor = {
  dark: '#171820',
  light: '#F7F6F9',
};

const priorityColors = {
  low: '#72C2F8',
  medium: '#F3B249',
  high: '#EA3D65',
};

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

    font-family: Inter;
    font-size: 10px;
    font-weight: 600;
    line-height: calc(12 / 10); /* 120% */

    border-radius: 4px;
    color: ${({ theme }) => (theme === 'dark' ? '#111111' : '#FFFFFF')};
    background-color: ${({ priority }) => priorityColors[priority]};
  }

  .controlsWrapper {
    line-height: 0;
  }
  & button {
    cursor: pointer;
    line-height: 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: ${({ theme }) => textColor[theme]};
    background-color: ${({ theme }) => sectionBgColor[theme]};
  }

  & button:not(:last-child) {
    margin-right: 10px;
  }

  & button:hover {
    color: #2b78ef;
  }

  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: ${({ theme }) => sectionBgColor[theme]};

    @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
