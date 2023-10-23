import { useEffect, useState } from 'react';

import { format } from 'date-fns';
// import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
  DatePickerButton,
  DatePickerWrapper,
  CalendarGlobalStyles,
} from 'components/Calendar/common/NewCalendarDatePicker.styled';

const CalendarDate = ({ date, currentData }) => {
  console.log('date: ', date);

  const [dateValue, setDateValue] = useState(date);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDateValue(date);
  }, [date]);
  console.log('dateValue: ', dateValue);

  const handleClick = () => setIsOpen(!isOpen);

  // const handleChange = date => {
  //   setDateValue(date);
  //   const formattedDate = format(date, 'yyyy-MM-dd');
  //   setDateValue(formattedDate);
  //   handleClick();
  // };

  return (
    <DatePickerWrapper>
      <DatePickerButton type="button" onClick={handleClick}>
        {format(dateValue, 'd MMM y')}
      </DatePickerButton>
      {isOpen && (
        <>
          <ReactDatePicker
            selected={dateValue}
            onChange={date => {
              setDateValue(date);
              const formattedDate = format(date, 'yyyy-MM-dd');
              setDateValue(date);
              currentData(formattedDate);
              handleClick();
            }}
            allowSameDay={true}
            inline
            calendarStartDay={1}
            dateFormat="dd MMMM yyyy"
            // formatWeekDay={day => day.substring(0, 1)}
          />
          <CalendarGlobalStyles />
        </>
      )}
    </DatePickerWrapper>
  );
};

export default CalendarDate;
