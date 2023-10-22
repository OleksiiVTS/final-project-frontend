import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// import { useNavigate } from 'react-router-dom';

const CalendarDate = ({ date, currentData }) => {
  console.log('date: ', date);
  // const navigate = useNavigate();

  const [dateValue, setDateValue] = useState(date);
  console.log('dateValue: ', dateValue);

  useEffect(() => {
    setDateValue(date);
  }, [date]);

  return (
    <DatePicker
      onChange={date => {
        setDateValue(date);
        const formattedDate = format(date, 'yyyy-MM-dd');
        if (setDateValue) {
          setDateValue(formattedDate);
        }
        return currentData(formattedDate);
      }}
      value={dateValue}
      clearIcon={null}
      format={'y-MM-dd'}
      locale="en-US"
      showLeadingZeros={true}
    />
  );
};

export default CalendarDate;
