import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PeriodSelector, PeriodTypeSelector } from '.';

import { ToolbarWrapper } from './CalendarToolbar.styled';

const CalendarToolbar = ({ today, onClickPrev, onClickNext }) => {
	const [type, setType] = useState('month');
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.includes('day')) {
			setType('day');
			return;
		}

		setType('month');
	}, [pathname]);

	return (
		<ToolbarWrapper>
			<PeriodSelector
				onClickPrev={onClickPrev}
				onClickNext={onClickNext}
				type={type}
				date={today}
			/>
			<PeriodTypeSelector today={today} onChangeType={setType} />
		</ToolbarWrapper>
	);
};

export default CalendarToolbar;

CalendarToolbar.propTypes = {
	onClickPrev: PropTypes.func.isRequired,
	onClickNext: PropTypes.func.isRequired,
	today: PropTypes.string.isRequired,
};
