import { useLocation, useNavigate } from 'react-router-dom';
import {
  // MonthCalendarHeadStyles,
  WorkDay,
  // WeekendDay,
  // MobileDaysList,
  DesktopDayList,
  StyledDayCalendarHead,
} from './DayCalendarHead.styled.js';
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

// const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
// const weekendDayNames = ['SAT', 'SUN'];

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
    <StyledDayCalendarHead className="DayCalendarHead">
      <DesktopDayList
        borderColor={
          theme === 'dark'
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(220, 227, 229, 0.80)'
        }
        bgColor={theme === 'dark' ? '#21222c' : '#ffffff'}
      >
        {weekDates.map(date => {
          const dayOfWeek = format(date, 'eee');
          const isCurrentDay = format(date, 'dd') === format(currentDate, 'dd');

          return (
            <WorkDay
              key={dayOfWeek}
              color={theme === 'dark' ? '#ffffff' : '#343434'}
            >
              <span>{dayOfWeek}</span>
              <button
                type="button"
                className={isCurrentDay ? 'current' : null}
                onClick={() => handleClick(date)}
              >
                {format(date, 'dd')}
              </button>
            </WorkDay>
          );
        })}
      </DesktopDayList>

      {/* <MobileDaysList
        borderColor={
          theme === 'dark'
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(220, 227, 229, 0.80)'
        }
        bgColor={theme === 'dark' ? '#21222c' : '#ffffff'}
      >
        {workDayNames.map(day => (
          <WorkDay key={day}>{day.slice(0, 1)}</WorkDay>
        ))}
        {weekendDayNames.map(day => (
          <WeekendDay key={day}>{day.slice(0, 1)}</WeekendDay>
        ))}
      </MobileDaysList> */}
    </StyledDayCalendarHead>
  );
};

export default DayCalendarHead;
