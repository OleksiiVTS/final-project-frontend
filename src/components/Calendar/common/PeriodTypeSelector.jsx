import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { List, StyledNavLink } from './PeriodTypeSelector.styled';

const PeriodTypeSelector = ({ today, onChangeType, theme }) => {
  const formattedToday = format(new Date(today), 'yyyy-MM-dd');

  return (
    <List>
      <li>
        <StyledNavLink
          className="month"
          to={`/calendar/month/${formattedToday}`}
          onClick={() => onChangeType('month')}
          bgcolor={theme === 'dark' ? '#21222c' : '#e3f3ff'}
          hoverbgcolor={theme === 'dark' ? '#3e85f3' : '#cae8ff'}
          hovercolor={theme === 'dark' ? '#ffffff' : '#3e85f3'}
        >
          Month
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          className="day"
          to={`/calendar/day/${formattedToday}`}
          onClick={() => onChangeType('day')}
          bgcolor={theme === 'dark' ? '#21222c' : '#e3f3ff'}
          hoverbgcolor={theme === 'dark' ? '#3e85f3' : '#cae8ff'}
          hovercolor={theme === 'dark' ? '#ffffff' : '#3e85f3'}
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
