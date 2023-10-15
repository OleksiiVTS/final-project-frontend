import React from 'react';
import { StyledTasksColumnItem } from './TasksColumnItem.styled';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';
import ColumnTasksList from './ColumnTasksList/ColumnTasksList';

const TasksColumnItem = ({ title }) => {
  // const title = 'To do';

  return (
    <StyledTasksColumnItem className="tasksColumnItem">
      <ColumnHeadBar title={title} />
      <ColumnTasksList />
      <AddTaskBtn />
    </StyledTasksColumnItem>
  );
};

export default TasksColumnItem;
