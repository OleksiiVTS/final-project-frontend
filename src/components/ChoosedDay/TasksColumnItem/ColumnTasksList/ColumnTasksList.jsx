import React from 'react';
import { StyledColumnTasksList } from './ColumnTasksList.styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnTasksList = () => {
  const tasks = [1, 2, 3];

  return (
    <StyledColumnTasksList>
      {tasks.map(data => (
        <TaskColumnCard key={data} />
      ))}
    </StyledColumnTasksList>
  );
};

export default ColumnTasksList;
