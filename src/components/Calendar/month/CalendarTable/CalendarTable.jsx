import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoading, selectTasks } from 'redux/task/taskSelectors';

import Loader from 'components/Loader';
import { renderCalendar } from 'utils/calendar';

import { GridWrapper } from './CalendarTable.styled';

const CalendarTable = ({ theme }) => {
  const { currentDate } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const tasksList = useSelector(selectTasks);

  return isLoading ? (
    <Loader />
  ) : (
    <GridWrapper
      bordercolor={
        theme === 'dark'
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(220, 227, 229, 0.80)'
      }
      bgcolor={theme === 'dark' ? '#21222c' : '#ffffff'}
    >
      {renderCalendar({ isLoading, currentDate, tasksList, theme })}
    </GridWrapper>
  );
};

export default CalendarTable;
