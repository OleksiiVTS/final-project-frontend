import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { CalendarGlobalStyles } from './CalendarDatePicker.styled';

const CalendarDatePicker = ({
	type,
	// CustomInput,
	onSelectDay,
	setCurrentDate,
}) => {
	const params = useParams();
	const isParams = Boolean(Object.keys(params).length);
	console.log(isParams);

	const [startDate, setStartDate] = useState(onSelectDay);
	const navigate = useNavigate();

	const locale = enUS;

	useEffect(() => {
		setStartDate(onSelectDay);
	}, [onSelectDay]);

	return (
		<>
			<DatePicker
				selected={startDate}
				onChange={date => {
					setStartDate(date);
					const formattedDate = format(date, 'yyyy-MM-dd');
					if (setCurrentDate) {
						setCurrentDate(formattedDate);
					}
					navigate(
						isParams ? `/calendar/${type}/${formattedDate}` : '/statistics'
					);
				}}
				// customInput={<CustomInput />}
				dateFormat={type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy'}
				calendarStartDay={1}
				formatWeekDay={day => day.substring(0, 1)}
				locale={locale}
			/>
			<CalendarGlobalStyles />
		</>
	);
};

export default CalendarDatePicker;

CalendarDatePicker.propTypes = {
	type: PropTypes.string.isRequired,
	// CustomInput: PropTypes.elementType.isRequired,
	onSelectDay: PropTypes.object.isRequired,
	setCurrentDate: PropTypes.func,
};
