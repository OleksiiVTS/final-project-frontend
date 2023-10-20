import { CalendarToolbar } from 'components/Calendar/common';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';
import { getCurrentDate } from 'utils/calendar';

const PeriodPaginator = () => {
  const theme = useSelector(selectTheme);
  const currentDate = getCurrentDate();

  return (
    <div>
      <CalendarToolbar
        // onClickPrev={handlePrev}
        // onClickNext={handleNext}
        today={currentDate}
        theme={theme}
      />
    </div>
  );
};

export default PeriodPaginator;
