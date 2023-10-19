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

const renderCalendar = ({ isLoading, currentDate, tasksList }) => {
  const calendar = buildCalendar(currentDate);

  if (!isLoading) {
    const calendarMarkup = calendar.map((dayItem, idx) => {
      if (!dayItem) {
        return <CellWrapper key={idx} />;
      }

      const calendarWithTask = getDayTasks(dayItem, tasksList);

      return (
        <CellWrapper
          key={idx}
          to={`/calendar/day/${format(dayItem, 'yyyy-MM-dd')}`}
          iscurrentmonth={isCurrentMonth(parseISO(format(dayItem, 'y-MM-dd')))}
          istoday={isToday(parseISO(format(dayItem, 'y-MM-dd'))).toString()}
        >
          <RowInCell>
            <ShowDayWrapper>
              {isToday(parseISO(format(dayItem, 'y-MM-dd'))) ? (
                <CurrentDay>{format(dayItem, 'd')}</CurrentDay>
              ) : (
                <DayWrapper>{format(dayItem, 'd')}</DayWrapper>
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
              <TasksMoreLabel>...</TasksMoreLabel>
            )}
          </RowInCell>
        </CellWrapper>
      );
    });

    return calendarMarkup;
  }
};

export default renderCalendar;
