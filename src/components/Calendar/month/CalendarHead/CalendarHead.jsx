import {
  MonthCalendarHeadStyles,
  WorkDay,
  WeekendDay,
  MobileDaysList,
  DesktopDayList,
} from './CalendarHead.styled';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

const CalendarHead = ({ theme }) => {
  return (
    <MonthCalendarHeadStyles>
      <DesktopDayList
        bordercolor={
          theme === 'dark'
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(220, 227, 229, 0.80)'
        }
        bgcolor={theme === 'dark' ? '#21222c' : '#ffffff'}
      >
        {workDayNames.map(day => (
          <WorkDay key={day} color={theme === 'dark' ? '#ffffff' : '#343434'}>
            {day}
          </WorkDay>
        ))}
        {weekendDayNames.map(day => (
          <WeekendDay key={day}>{day}</WeekendDay>
        ))}
      </DesktopDayList>

      <MobileDaysList
        bordercolor={
          theme === 'dark'
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(220, 227, 229, 0.80)'
        }
        bgcolor={theme === 'dark' ? '#21222c' : '#ffffff'}
      >
        {workDayNames.map(day => (
          <WorkDay key={day} color={theme === 'dark' ? '#ffffff' : '#343434'}>
            {day.slice(0, 1)}
          </WorkDay>
        ))}
        {weekendDayNames.map(day => (
          <WeekendDay key={day}>{day.slice(0, 1)}</WeekendDay>
        ))}
      </MobileDaysList>
    </MonthCalendarHeadStyles>
  );
};

export default CalendarHead;
