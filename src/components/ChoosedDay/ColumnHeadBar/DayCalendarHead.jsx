import { useLocation, useNavigate } from 'react-router-dom';
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

import { DayList, DayContainer } from './DayCalendarHead.styled.js';
import DayListItem from './DayListItem/DayListItem.jsx';
import { useTheme } from 'styled-components';

const DayCalendarHead = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentDate = new Date(pathname.slice(-10));

  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 1 });

  const weekDates = eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  });

  const handleClick = date => {
    navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
  };

  const { theme } = useTheme();
  return (
    <DayContainer className="DayCalendarHead">
      <DayList theme={theme}>
        {weekDates.map((date, idx) => {
          return (
            <DayListItem
              key={idx}
              date={date}
              currentDate={currentDate}
              onClick={handleClick}
              theme={theme}
            />
          );
        })}
      </DayList>
    </DayContainer>
  );
};

export default DayCalendarHead;
