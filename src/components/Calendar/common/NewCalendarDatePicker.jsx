import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { format } from 'date-fns';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const NewCalendarDatePicker = ({ type, date }) => {
  const navigate = useNavigate();
  const params = useParams();
  const isParams = Boolean(Object.keys(params).length);

  const [dateValue, setDateValue] = useState(date);

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
        navigate(
          isParams ? `/calendar/${type}/${formattedDate}` : '/statistics'
        );
      }}
      value={dateValue}
      clearIcon={null}
      format={type === 'day' ? 'y-MM-dd' : 'MMMM-y'}
      locale="en-US"
      showLeadingZeros={true}
    />
  );
};

export default NewCalendarDatePicker;
