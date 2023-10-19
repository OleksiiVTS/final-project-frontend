import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoading, selectTasks } from 'redux/task/taskSelectors';

import Loader from 'components/Loader';
import { renderCalendar } from 'utils/calendar';

import { GridWrapper } from './CalendarTable.styled';

const CalendarTable = () => {
  const { currentDate } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const tasksList = useSelector(selectTasks);

  return isLoading ? (
    <Loader />
  ) : (
    <GridWrapper>
      {renderCalendar({ isLoading, currentDate, tasksList })}
    </GridWrapper>
  );
};

export default CalendarTable;
