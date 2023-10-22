import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const CalendarDate = ({ date }) => {
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
