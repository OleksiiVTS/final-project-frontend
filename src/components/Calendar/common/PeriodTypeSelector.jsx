import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { List, StyledNavLink } from './PeriodTypeSelector.styled';

const PeriodTypeSelector = ({ today, onChangeType }) => {
	const formattedToday = format(new Date(today), 'yyyy-MM-dd');

	return (
		<List>
			<li>
				<StyledNavLink
					className="month"
					to={`/calendar/month/${formattedToday}`}
					onClick={() => onChangeType('month')}
				>
					Month
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink
					className="day"
					to={`/calendar/day/${formattedToday}`}
					onClick={() => onChangeType('day')}
				>
					Day
				</StyledNavLink>
			</li>
		</List>
	);
};

export default PeriodTypeSelector;

PeriodTypeSelector.propTypes = {
	today: PropTypes.string.isRequired,
	onChangeType: PropTypes.func.isRequired,
};
