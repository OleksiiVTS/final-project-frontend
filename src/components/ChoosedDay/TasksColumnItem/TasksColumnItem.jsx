import { StyledTasksColumnItem } from './TasksColumnItem.styled';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from './ColumnTasksList/ColumnTasksList';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';

const TasksColumnItem = ({ title, tasks, category }) => {
  return (
    <StyledTasksColumnItem className="tasksColumnItem">
      <ColumnHeadBar title={title} category={category} />
      <ColumnTasksList tasks={tasks} />
      <AddTaskBtn category={category} />
    </StyledTasksColumnItem>
  );
};

export default TasksColumnItem;
