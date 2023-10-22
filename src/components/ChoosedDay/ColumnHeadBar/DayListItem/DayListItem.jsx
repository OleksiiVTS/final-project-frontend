import { format } from 'date-fns';
import React from 'react';
import { StyledDayListItem } from './DayListItem.styled';

const DayListItem = ({ date, onClick, currentDate, color }) => {
  const dayOfWeek = format(date, 'eee');
  const isCurrentDay = format(date, 'dd') === format(currentDate, 'dd');

  return (
    <StyledDayListItem color={color}>
      <span className="tablet">{dayOfWeek}</span>
      <span className="mobile">{dayOfWeek[0]}</span>
      <button
        type="button"
        className={isCurrentDay ? 'current' : null}
        onClick={() => onClick(date)}
      >
        {format(date, 'dd')}
      </button>
    </StyledDayListItem>
  );
};

export default DayListItem;
