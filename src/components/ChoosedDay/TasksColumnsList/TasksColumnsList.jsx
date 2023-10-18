import React from 'react';
import { StyledTasksColumnsList } from './TasksColumnsList.styled';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';

const TasksColumnsList = ({ currentTasks, categoryList, sortedTasks }) => {
  // console.log(sortedTasks);
  // const titles = ['To do', 'In progress', 'Done'];
  // const categoryList = ['to-do', 'in-progress', 'done'];

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const parseCategoryTitles = categoryList => {
    return categoryList.map(title => capitalize(title).replace('-', ' '));
  };

  const parsedTitles = parseCategoryTitles(categoryList);
  // console.log(parsedTitles);
  // console.log(sortedTasks);

  return (
    <StyledTasksColumnsList>
      {categoryList.map((category, idx) => (
        <TasksColumnItem
          key={category}
          title={parsedTitles[idx]}
          category={category}
          tasks={sortedTasks[category]}
        />
      ))}
      {/* {currentTasks.map((set, idx) => (
        <TasksColumnItem
          key={parsedTitles[idx]}
          title={parsedTitles[idx]}
          category={categoryList[idx]}
          tasks={set}
        />
      ))} */}
    </StyledTasksColumnsList>
  );
};

export default TasksColumnsList;
