import { StyledTasksColumnsList } from './TasksColumnsList.styled';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';

import { parseCategoryTitle } from 'helpers/helpers';
import { CATEGORY_LIST } from 'constants/categoryList';

const TasksColumnsList = ({ sortedTasks }) => {
  return (
    <StyledTasksColumnsList>
      {CATEGORY_LIST.map(category => (
        <TasksColumnItem
          key={category}
          title={parseCategoryTitle(category)}
          category={category}
          tasks={sortedTasks[category]}
        />
      ))}
    </StyledTasksColumnsList>
  );
};

export default TasksColumnsList;
