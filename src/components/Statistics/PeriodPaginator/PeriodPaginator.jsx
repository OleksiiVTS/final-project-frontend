import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';
import PropTypes from 'prop-types';
import { parse } from 'date-fns';
import { ChevronLeft, ChevronRight } from '../../Calendar/icons';
import CalendarDate from '../CalendarDate/CalendarDate';
import {
  Wrapper,
  ButtonsWrapper,
  ButtonLeft,
  ButtonRight,
} from '../../Calendar/common/PeriodSelector.styled';

const PeriodPaginator = ({
  onClickPrev,
  onClickNext,
  type,
  onChangeType,
  date,
}) => {
  const theme = useSelector(selectTheme);
  const currentDate = parse(date, 'yyyy-MM-dd', new Date());

  return (
    <Wrapper>
      <CalendarDate type={type} date={currentDate} />
      {/* <CalendarDatePicker
      type={type}
      customInput={CustomInput} ===
      onSelectDay={currentDate}
      setCurrentDate={setCurrentDate} ===
    /> */}
      <ButtonsWrapper>
        <ButtonLeft
          onClick={() => {
            onClickPrev(type);
          }}
          bgcolor={theme === 'dark' ? '#21222c' : '#ffffff'}
          bordercolor={
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(220, 227, 229, 0.80)'
          }
          color={theme === 'dark' ? '#ffffff' : '#343434'}
          hovercolor={
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(220, 227, 229, 1)'
          }
        >
          <ChevronRight width="18px" height="18px" />
        </ButtonLeft>

        <ButtonRight
          onClick={() => {
            onClickNext(type);
          }}
          bgcolor={theme === 'dark' ? '#21222C' : '#ffffff'}
          bordercolor={
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(220, 227, 229, 0.80)'
          }
          color={theme === 'dark' ? '#ffffff' : '#343434'}
          hovercolor={
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(220, 227, 229, 1)'
          }
        >
          <ChevronLeft width="18px" height="18px" />
        </ButtonRight>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default PeriodPaginator;

PeriodPaginator.propTypes = {
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  type: PropTypes.string,
  date: PropTypes.string,
};
