// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { getTasks as getTasksThunk } from 'redux/task/taskOperations';
import { selectIsLoading, selectTasks } from 'redux/task/taskSelectors';

import Loader from 'components/Loader';
import { renderCalendar } from 'utils/calendar';

import { GridWrapper } from './CalendarTable.styled';

const CalendarTable = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);

  const { currentDate } = useParams();
  const date = currentDate.slice(0, 7);

  console.log(date);

  // useEffect(() => {
  //   dispatch(getTasksThunk(date));
  // }, [date, dispatch]);

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
