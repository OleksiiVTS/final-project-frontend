import { useState } from 'react';
import { format } from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
  DatePickerButton,
  DatePickerWrapper,
  CalendarGlobalStyles,
} from 'components/Calendar/common/NewCalendarDatePicker.styled';

const CalendarDate = ({ date, setDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <DatePickerWrapper>
      <DatePickerButton type="button" onClick={handleClick}>
        {format(date, 'd MMM y')}
      </DatePickerButton>
      {isOpen && (
        <>
          <ReactDatePicker
            selected={date}
            onChange={newDate => {
              setDate(newDate);
              handleClick();
            }}
            allowSameDay={true}
            inline
            calendarStartDay={1}
            dateFormat={'dd MMMM yyyy'}
            formatWeekDay={day => day.substring(0, 1)}
          />
          <CalendarGlobalStyles />
        </>
      )}
    </DatePickerWrapper>
  );
};

export default CalendarDate;
