import {
  StyledTasksColumnsContainer,
  StyledTasksColumnsList,
} from './TasksColumnsList.styled';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';

import { parseCategoryTitle } from 'helpers/helpers';
import { CATEGORY_LIST } from 'constants/categoryList';

const TasksColumnsList = ({ sortedTasks }) => {
  return (
    <StyledTasksColumnsContainer>
      <StyledTasksColumnsList className="TasksColumnsList">
        {CATEGORY_LIST.map(category => (
          <TasksColumnItem
            key={category}
            title={parseCategoryTitle(category)}
            category={category}
            tasks={sortedTasks[category]}
          />
        ))}
      </StyledTasksColumnsList>
    </StyledTasksColumnsContainer>
  );
};

export default TasksColumnsList;
