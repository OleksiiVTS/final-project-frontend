import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { StyledChoosedDay } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

import { selectTasks } from 'redux/task/taskSelectors';
import { CreateSortedTasks, filterDayTasks } from 'helpers/helpers';
import { CATEGORY_LIST } from 'constants/categoryList';

const ChoosedDay = () => {
  const { pathname } = useLocation();
  const monthTasks = useSelector(selectTasks);

  const day = pathname.slice(-2);
  const dayTasks = filterDayTasks(monthTasks, day);
  const sortedTasks = CreateSortedTasks(CATEGORY_LIST, dayTasks); // maybe useSelector ?

  return (
    <StyledChoosedDay>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList sortedTasks={sortedTasks} />
    </StyledChoosedDay>
    //
  );
};

export default ChoosedDay;
