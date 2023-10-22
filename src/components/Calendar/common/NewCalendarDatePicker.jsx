import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { format } from 'date-fns';
// import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import {
  DatePickerWrapper,
  DatePickerButton,
  CalendarGlobalStyles,
} from './NewCalendarDatePicker.styled';

const NewCalendarDatePicker = ({ type, date }) => {
  const navigate = useNavigate();
  const params = useParams();
  const isParams = Boolean(Object.keys(params).length);

  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, setDateValue] = useState(date);

  useEffect(() => {
    setDateValue(date);
  }, [date]);

  const handleClick = () => setIsOpen(!isOpen);

  const handleChange = date => {
    setDateValue(date);
    const formattedDate = format(date, 'yyyy-MM-dd');

    setDateValue(date);
    navigate(isParams ? `/calendar/${type}/${formattedDate}` : '/statistics');
    handleClick();
  };

  return (
    <DatePickerWrapper>
      <DatePickerButton type="button" onClick={handleClick}>
        {format(dateValue, type === 'day' ? 'd MMM y' : 'MMMM y')}
      </DatePickerButton>
      {isOpen && (
        <>
          <ReactDatePicker
            selected={dateValue}
            onChange={date => handleChange(date)}
            allowSameDay={true}
            inline
            calendarStartDay={1}
            dateFormat={type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy'}
            formatWeekDay={day => day.substring(0, 1)}
          />
          <CalendarGlobalStyles />
        </>
        // <DatePicker
        // onChange={date => {
        //   setDateValue(date);
        //   const formattedDate = format(date, 'yyyy-MM-dd');
        //   if (setDateValue) {
        //     setDateValue(formattedDate);
        //   }
        //   navigate(
        //     isParams ? `/calendar/${type}/${formattedDate}` : '/statistics'
        //   );
        // }}
        //   value={dateValue}
        //   calendarIcon={null}
        //   clearIcon={null}
        //   disabled={true}
        //   format={type === 'day' ? 'y-MM-dd' : 'MMMM-y'}
        //   locale="en-US"
        //   showLeadingZeros={true}
        // />
      )}
    </DatePickerWrapper>
  );
};

export default NewCalendarDatePicker;
