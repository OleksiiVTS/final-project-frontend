import React from 'react';
import { StyledTaskColumnCard } from './TaskColumnCard.styled';
import TaskToolbar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = props => {
  const title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, earum!`;

  // console.log(title.length);

  // const trimedTitle =
  return (
    <StyledTaskColumnCard>
      <p className="title">{title}</p>
      <TaskToolbar />
    </StyledTaskColumnCard>
  );
};

export default TaskColumnCard;
