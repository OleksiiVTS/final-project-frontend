import React from 'react';
// import { useDispatch } from 'react-redux';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { StyledChoosedDay } from './ChoosedDay.styled';

const ChoosedDay = () => {
  // const dispatch = useDispatch();
  const tasks = [];
  const currentDay = '';
  const tasksForCurrentDay = [
    {
      title: 'first',
      start: '14:15',
      end: '03:00',
      priority: 'medium',
      date: '2023-12-31',
      category: 'done',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      title: 'second',
      start: '14:15',
      end: '03:00',
      priority: 'medium',
      date: '2023-12-31',
      category: 'to-do',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      title: 'third',
      start: '14:15',
      end: '03:00',
      priority: 'low',
      date: '2023-12-31',
      category: 'to-do',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      title: 'fourth',
      start: '14:15',
      end: '03:00',
      priority: 'low',
      date: '2023-12-31',
      category: 'done',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      title: 'fifth',
      start: '15:30',
      end: '12:12',
      priority: 'high',
      date: '2023-12-31',
      category: 'done',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      title: 'sixth',
      start: '15:30',
      end: '12:12',
      priority: 'high',
      date: '2023-12-31',
      category: 'to-do',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
  ];

  const priorityList = ['low', 'medium', 'high'];
  const categoryList = ['to-do', 'in-progress', 'done'];

  return (
    <StyledChoosedDay>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList />
    </StyledChoosedDay>
    //
  );
};

export default ChoosedDay;
