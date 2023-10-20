import { PeriodSelector, PeriodTypeSelector } from 'components/Calendar/common';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';
import { getCurrentDate } from 'utils/calendar';
// import { getCurrentDate } from 'utils/calendar';

const PeriodPaginator = ({ onClickPrev, onClickNext, type, onChangeType }) => {
  const theme = useSelector(selectTheme);
  const currentDate = getCurrentDate();

  return (
    <div>
      <PeriodSelector
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        type={type}
        date={currentDate}
        theme={theme}
      />

      {/* <CalendarToolbar
        // onClickPrev={handlePrev}
        // onClickNext={handleNext}
        today={currentDate}
        theme={theme}
      /> */}
    </div>
  );
};

export default PeriodPaginator;
