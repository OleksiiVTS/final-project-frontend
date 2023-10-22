import { useLocation, useNavigate } from 'react-router-dom';
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

import { DayList } from './DayCalendarHead.styled.js';
import DayListItem from './DayListItem/DayListItem.jsx';

const borderColor = {
  dark: 'rgba(255, 255, 255, 0.15)',
  light: 'rgba(220, 227, 229, 0.50)',
};

const bgColor = {
  dark: '#21222c',
  light: '#ffffff',
};

const dayOfWeekColor = {
  dark: '#ffffff',
  light: '#343434',
};

const DayCalendarHead = ({ theme }) => {
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

  return (
    <div className="DayCalendarHead">
      <DayList borderColor={borderColor[theme]} bgColor={bgColor[theme]}>
        {weekDates.map((date, idx) => {
          return (
            <DayListItem
              key={idx}
              date={date}
              currentDate={currentDate}
              onClick={handleClick}
              color={dayOfWeekColor[theme]}
            />
          );
        })}
      </DayList>
    </div>
  );
};

export default DayCalendarHead;
