import React from 'react';
import { StyledTasksColumnsList } from './TasksColumnsList.styled';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';

const TasksColumnsList = ({ currentTasks }) => {
  // console.log(currentTasks);
  const titles = ['To do', 'In progress', 'Done'];
  const categoryList = ['to-do', 'in-progress', 'done'];

  return (
    <StyledTasksColumnsList>
      {currentTasks.map((set, idx) => (
        <TasksColumnItem
          key={titles[idx]}
          title={titles[idx]}
          category={categoryList[idx]}
          tasks={set}
        />
      ))}
    </StyledTasksColumnsList>
  );
};

export default TasksColumnsList;
