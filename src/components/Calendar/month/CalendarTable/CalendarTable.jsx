import {
  useEffect,
  // useState
} from 'react';
import { useParams } from 'react-router-dom';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
// import {
// format,
// getDay,
// isToday,
// startOfDay,
// endOfDay,
// addDays,
// startOfWeek,
// isSameMonth,
// startOfMonth,
// endOfMonth,
// addMonths,
// subMonths,
// } from 'date-fns';

// import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';
import { getTasks as getTasksThunk } from 'redux/task/taskOperations';
// import { selectTasks } from 'redux/task/taskSelectors';

// import { buildCalendar } from 'utils/calendar';

// import {
//   GridWrapper,
//   CellWrapper,
//   RowInCell,
//   DayWrapper,
//   CurrentDay,
//   ShowDayWrapper,
//   TaskListWrapper,
//   TaskItem,
//   TasksMoreLabel,
// } from './CalendarTable.styled';

const CalendarTable = () => {
  const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);

  const { currentDate } = useParams();
  const year = currentDate.split('-')[0];
  const month = currentDate.split('-')[1];
  const date = { year, month };

  console.log(date);

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  // const { date: response, isLoading: isTasksLoading } = useGetTasksQuery(date);
  // const calendar = buildCalendar(currentDate);

  // const isCurrentMonth = day => isSameMonth(new Date(), day);

  // const getDayTasks = (day, tasks) => {
  //   if (tasks) {
  //     return tasks.filter(
  //       task =>
  //         new Date(task.date).getTime() >= startOfDay(day).getTime() &&
  //         new Date(task.date).getTime() < endOfDay(day).getTime()
  //     );
  //   }
  // };
};

export default CalendarTable;
