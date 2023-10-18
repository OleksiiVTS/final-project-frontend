import {
	MonthCalendarHeadStyles,
	WorkDay,
	WeekendDay,
	MobileDaysList,
	DesktopDayList,
} from './CalendarHead.styled';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

const CalendarHead = () => {
	return (
		<MonthCalendarHeadStyles>
			<DesktopDayList>
				{workDayNames.map(day => (
					<WorkDay key={day}>{day}</WorkDay>
				))}
				{weekendDayNames.map(day => (
					<WeekendDay key={day}>{day}</WeekendDay>
				))}
			</DesktopDayList>
			<MobileDaysList>
				{workDayNames.map(day => (
					<WorkDay key={day}>{day.slice(0, 1)}</WorkDay>
				))}
				{weekendDayNames.map(day => (
					<WeekendDay key={day}>{day.slice(0, 1)}</WeekendDay>
				))}
			</MobileDaysList>
		</MonthCalendarHeadStyles>
	);
};

export default CalendarHead;
