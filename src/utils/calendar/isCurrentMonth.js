import { isSameMonth } from 'date-fns';

const isCurrentMonth = day => isSameMonth(new Date(), day).toString();

export default isCurrentMonth;
