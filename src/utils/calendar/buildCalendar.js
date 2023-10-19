import {
  addDays,
  addMonths,
  endOfMonth,
  getDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

const buildCalendar = currentDate => {
  const calendar = [];
  const firstDayMonth = startOfMonth(new Date(currentDate));
  const firstDayWeek = startOfWeek(firstDayMonth, { weekStartsOn: 1 });
  const lastDayMonth = endOfMonth(new Date(currentDate));
  const firstDayNextMonth = startOfMonth(
    new Date(addMonths(new Date(currentDate), 1))
  );

  let day = firstDayWeek;

  while (day < firstDayMonth) {
    calendar.push(null);
    day = addDays(day, 1);
  }

  while (day <= lastDayMonth) {
    calendar.push(day);
    day = addDays(day, 1);
  }

  let start = getDay(firstDayNextMonth);

  if (start !== 1) {
    while (start <= 7) {
      calendar.push(null);
      if (start === 0) {
        break;
      } else {
        ++start;
      }
    }
  }

  return calendar;
};

export default buildCalendar;
