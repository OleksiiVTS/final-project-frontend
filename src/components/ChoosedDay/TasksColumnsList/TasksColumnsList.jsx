import React from 'react';
import { StyledTasksColumnsList } from './TasksColumnsList.styled';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';

const TasksColumnsList = () => {
  // const titles = [1, 2, 3];

  const titles = ['To do', 'In progress', 'Done'];

  return (
    <StyledTasksColumnsList>
      {titles.map(title => (
        <TasksColumnItem key={title} title={title} />
      ))}
    </StyledTasksColumnsList>
  );
};

export default TasksColumnsList;
