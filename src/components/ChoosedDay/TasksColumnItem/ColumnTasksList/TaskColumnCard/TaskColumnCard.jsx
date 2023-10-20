import { StyledTaskColumnCard } from './TaskColumnCard.styled';
import TaskToolbar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ task }) => {
  return (
    <StyledTaskColumnCard>
      <p className="title">{task.title}</p>
      <p className="time">
        <span>{task.start}</span>-<span>{task.end}</span>
      </p>
      <TaskToolbar task={task} />
    </StyledTaskColumnCard>
  );
};

export default TaskColumnCard;
