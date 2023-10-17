import styled from 'styled-components';

export const StyledTaskColumnCard = styled.div`
  /* display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-bottom: 32px; */
  padding: 14px 14px 18px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;

  & .title,
  .time {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    /* margin-bottom: 28px; */
    margin-bottom: 5px;

    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285; /* 128.571% */
  }

  & .time {
    text-align: center;
  }

  & .time span:first-child {
    margin-right: 5px;
  }
  & .time span:last-child {
    margin-left: 5px;
  }
`;
