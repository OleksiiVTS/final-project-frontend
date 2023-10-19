import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks as getTasksThunk } from 'redux/task/taskOperations';
import { selectTasks } from 'redux/task/taskSelectors';
import { selectIsLoading } from 'redux/task/taskSelectors';
import Loader from 'components/Loader';
import { renderCalendar } from 'utils/calendar';

import { GridWrapper } from './CalendarTable.styled';

const CalendarTable = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);

  const { currentDate } = useParams();
  // const year = currentDate.split('-')[0];
  const month = currentDate.split('-')[1];
  // const date = { year, month };

  console.log(month);

  useEffect(() => {
    dispatch(getTasksThunk(month));
  }, [month, dispatch]);

  console.log(tasks);

  // const { date: response, isLoading: isTasksLoading } = useGetTasksQuery(date);
  const response = {};

  return isLoading ? (
    <Loader />
  ) : (
    <GridWrapper>
      {renderCalendar({ isLoading, currentDate, response })}
    </GridWrapper>
  );
};

export default CalendarTable;
