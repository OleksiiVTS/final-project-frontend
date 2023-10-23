import { StyledTasksColumnItem } from './TasksColumnItem.styled';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from './ColumnTasksList/ColumnTasksList';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';
import { useTheme } from 'styled-components';

const TasksColumnItem = ({ title, tasks, category }) => {
  const { theme } = useTheme();
  return (
    <StyledTasksColumnItem className="tasksColumnItem" theme={theme}>
      <ColumnHeadBar title={title} category={category} />
      {tasks.length > 0 && <ColumnTasksList tasks={tasks} />}
      <AddTaskBtn category={category} />
    </StyledTasksColumnItem>
  );
};

export default TasksColumnItem;
