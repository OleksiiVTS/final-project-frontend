import { format } from 'date-fns';
import React from 'react';
import { StyledDayListItem } from './DayListItem.styled';
import { useTheme } from 'styled-components';

const DayListItem = ({ date, onClick, currentDate }) => {
  const dayOfWeek = format(date, 'eee');
  const isCurrentDay = format(date, 'dd') === format(currentDate, 'dd');

  const { theme } = useTheme();
  return (
    <StyledDayListItem theme={theme}>
      <span className="tablet">{dayOfWeek}</span>
      <span className="mobile">{dayOfWeek[0]}</span>
      <button
        type="button"
        className={isCurrentDay ? 'current' : null}
        aria-label="day of the week"
        onClick={() => onClick(date)}
      >
        {format(date, 'dd')}
      </button>
    </StyledDayListItem>
  );
};

export default DayListItem;
