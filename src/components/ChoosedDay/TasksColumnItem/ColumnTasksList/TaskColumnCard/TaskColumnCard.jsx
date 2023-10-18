import React from 'react';
import { StyledTaskColumnCard } from './TaskColumnCard.styled';
import TaskToolbar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ task }) => {
  return (
    <StyledTaskColumnCard>
      <p className="title">{task.title}</p>
      <TaskToolbar task={task} />
    </StyledTaskColumnCard>
  );
};

export default TaskColumnCard;
