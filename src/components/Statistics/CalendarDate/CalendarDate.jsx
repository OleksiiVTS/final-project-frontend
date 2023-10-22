import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const CalendarDate = ({ type, date }) => {
  const navigate = useNavigate();
  // const params = useParams();
  // const isParams = Boolean(Object.keys(params).length);

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
        navigate('/statistics');
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
