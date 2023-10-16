import React from 'react';
import { StyledTaskColumnCard } from './TaskColumnCard.styled';
import TaskToolbar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ task }) => {
  const { title, priority, _id } = task;
  return (
    <StyledTaskColumnCard>
      <p className="title">{title}</p>
      <TaskToolbar priority={priority} id={_id} />
    </StyledTaskColumnCard>
  );
};

export default TaskColumnCard;
