import { format, isToday, parseISO } from 'date-fns';

import { buildCalendar, getDayTasks, isCurrentMonth } from './';

import {
  CellWrapper,
  RowInCell,
  DayWrapper,
  CurrentDay,
  ShowDayWrapper,
  TaskListWrapper,
  TaskItem,
  TasksMoreLabel,
} from 'components/Calendar/month/CalendarTable/CalendarTable.styled';

const renderCalendar = ({ isLoading, currentDate, tasksList, theme }) => {
  const calendar = buildCalendar(currentDate);

  if (!isLoading) {
    const calendarMarkup = calendar.map((dayItem, idx) => {
      if (!dayItem) {
        return (
          <CellWrapper
            key={idx}
            bordercolor={
              theme === 'dark'
                ? 'rgba(255, 255, 255, 0.15)'
                : 'rgba(220, 227, 229, 0.80)'
            }
          />
        );
      }

      const calendarWithTask = getDayTasks(dayItem, tasksList);

      return (
        <CellWrapper
          key={idx}
          to={`/calendar/day/${format(dayItem, 'yyyy-MM-dd')}`}
          iscurrentmonth={isCurrentMonth(parseISO(format(dayItem, 'y-MM-dd')))}
          istoday={isToday(parseISO(format(dayItem, 'y-MM-dd'))).toString()}
          bordercolor={
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(220, 227, 229, 0.80)'
          }
        >
          <RowInCell>
            <ShowDayWrapper>
              {isToday(parseISO(format(dayItem, 'y-MM-dd'))) ? (
                <CurrentDay>{format(dayItem, 'd')}</CurrentDay>
              ) : (
                <DayWrapper color={theme === 'dark' ? '#ffffff' : '#343434'}>
                  {format(dayItem, 'd')}
                </DayWrapper>
              )}
            </ShowDayWrapper>

            <TaskListWrapper>
              {calendarWithTask &&
                calendarWithTask
                  .slice(0, 2)
                  .map(({ _id: id, priority, title }) => (
                    <TaskItem key={id} priority={priority}>
                      {title}
                    </TaskItem>
                  ))}
            </TaskListWrapper>

            {calendarWithTask && calendarWithTask.length > 2 && (
              <TasksMoreLabel color={theme === 'dark' ? '#ffffff' : '#3e85f3'}>
                ...
              </TasksMoreLabel>
            )}
          </RowInCell>
        </CellWrapper>
      );
    });

    return calendarMarkup;
  }
};

export default renderCalendar;
