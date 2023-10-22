import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { StyledChoosedDay } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

import { selectTasks } from 'redux/task/taskSelectors';
import { CreateSortedTasks, filterDayTasks } from 'helpers/helpers';
import { CATEGORY_LIST } from 'constants/categoryList';
import DayCalendarHead from './ColumnHeadBar/DayCalendarHead';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from 'redux/header/headerSlice';

const ChoosedDay = () => {
  const { pathname } = useLocation();
  const monthTasks = useSelector(selectTasks);

  const day = pathname.slice(-2);
  const dayTasks = filterDayTasks(monthTasks, day);
  const sortedTasks = CreateSortedTasks(CATEGORY_LIST, dayTasks); // maybe useSelector ?

  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={{ theme }}>
      <StyledChoosedDay className="ChoosedDay" theme={{ theme }}>
        <DayCalendarHead />
        <TasksColumnsList sortedTasks={sortedTasks} />
      </StyledChoosedDay>
    </ThemeProvider>
  );
};

export default ChoosedDay;
