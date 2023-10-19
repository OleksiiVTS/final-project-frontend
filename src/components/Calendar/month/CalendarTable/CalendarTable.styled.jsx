import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const setTaskPriorityColors = ({ priority }) => {
  switch (priority) {
    case 'low':
      return 'color: #3e85f3; background-color: #ceeefd';
    case 'medium':
      return 'color: #f3b249; background-color: #fcf0d4';
    case 'high':
      return 'color: #ea3d65; background-color: #ffd2dd';
    default:
      return 'color: #3e85f3; background-color: #ffffff';
  }
};

export const GridWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  align-content: flex-start;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  /* height: 564px; */
  /* height: 470px; */

  @media screen and (min-width: 768px) {
    /* height: 860px; */
    /* height: 720px; */
  }
  @media screen and (min-width: 1440px) {
    /* height: 750px; */
    /* height: 625px; */
  }
`;

export const CellWrapper = styled(NavLink)`
  position: relative;
  width: calc(100% / 7);
  height: 93px;
  padding-top: 31px;
  padding-bottom: 1px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: #ffffff;
  text-align: right;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 144px;
    padding-top: 41px;
    font-size: 16px;
    line-height: calc(18 / 12);
  }

  @media screen and (min-width: 1440px) {
    height: 125px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  color: #343434;
  font-size: 12px;
  font-weight: 700;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const CurrentDay = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  width: 34px;
  padding: 4px 6px;
  border-radius: 8px;
  background: #3e85f3;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const ShowDayWrapper = styled.div``;

export const TaskListWrapper = styled.ul`
  /* padding-inline: 8px; */
  padding: 8px;
`;

export const TaskItem = styled.li`
  height: 22px;
  margin-bottom: 4px;
  padding: 4px 4px 4px 8px;
  overflow: hidden;
  border-radius: 8px;
  ${props => setTaskPriorityColors(props)};
  font-size: 10px;
  font-weight: 700;
  line-height: calc(14 / 10);
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    /* min-width: 92px; */
    height: 26px;
    padding: 4px 8px 4px 12px;
    font-size: 14px;
    line-height: calc(13 / 10);
  }

  @media screen and (min-width: 1440px) {
    /* min-width: 114px; */
  }
`;

export const TasksMoreLabel = styled.div`
  /* margin-top: auto; */
  margin: auto;
  overflow: hidden;
  color: #3e85f3;
  font-size: 14px;
  text-align: center;
`;
