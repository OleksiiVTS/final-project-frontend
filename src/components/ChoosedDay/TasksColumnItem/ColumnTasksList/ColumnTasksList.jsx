import { StyledColumnTasksList } from './ColumnTasksList.styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnTasksList = ({ tasks }) => {
  return (
    <StyledColumnTasksList className="ColumnTasksList">
      {tasks.map(task => (
        <TaskColumnCard key={task._id} task={task} />
      ))}
    </StyledColumnTasksList>
  );
};

export default ColumnTasksList;
