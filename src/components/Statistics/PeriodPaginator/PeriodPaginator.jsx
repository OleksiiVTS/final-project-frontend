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
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PeriodPaginator = ({
  onClickPrev,
  onClickNext,
  // onChangeType,
  today,
}) => {
  // const { pathname } = useLocation();
  // const [type, setType] = useState('day');
  const theme = useSelector(selectTheme);

  // useEffect(() => {
  //   if (pathname.includes('day')) {
  //     setType('day');
  //     return;
  //   }
  // }, [pathname]);

  const currentDate = parse(today, 'yyyy-MM-dd', new Date());
  console.log('currentDate: ', currentDate);

  return (
    <Wrapper>
      <CalendarDate date={currentDate} />
      {/* <CalendarDatePicker
      type={type}
      customInput={CustomInput} ===
      onSelectDay={currentDate}
      setCurrentDate={setCurrentDate} ===
    /> */}
      <ButtonsWrapper>
        <ButtonLeft
          onClick={() => {
            onClickPrev();
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
            onClickNext();
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
  // onClickPrev: PropTypes.func.isRequired,
  // onClickNext: PropTypes.func.isRequired,
  // type: PropTypes.string,
  date: PropTypes.string,
};
