// import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  // format,
  parse,
} from 'date-fns';

import { NewCalendarDatePicker } from '.';
// import { CalendarDatePicker } from '.';

import { ChevronLeft, ChevronRight } from '../icons';
import {
  Wrapper,
  // TitleWrapper,
  ButtonsWrapper,
  ButtonLeft,
  ButtonRight,
} from './PeriodSelector.styled';
// import { useState } from 'react';

const PeriodSelector = ({
  onClickPrev,
  onClickNext,
  type,
  date,
  theme,
  // setCurrentDate,
}) => {
  // const getFormattedDate = () => {
  // 	return format(
  // 		new Date(date),
  // 		type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy'
  // 	);
  // };

  // console.log(setCurrentDate);

  // const CustomInput = forwardRef(({ value, onClick }, ref) => {
  // 	const formattedDate = getFormattedDate();

  // 	const monthYear = formattedDate.split(' ')[0];
  // 	const preparedMonth = `months.${monthYear.toLowerCase()}`;

  // 	return (
  // 		<TitleWrapper onClick={onClick} ref={ref}>
  // 			{type === 'day'
  // 				? value
  // 				: `${preparedMonth} ${formattedDate.split(' ')[1]}`}
  // 		</TitleWrapper>
  // 	);
  // });

  const currentDate = parse(date, 'yyyy-MM-dd', new Date());

  return (
    <Wrapper>
      <NewCalendarDatePicker type={type} date={currentDate} />
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

export default PeriodSelector;

PeriodSelector.propTypes = {
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  type: PropTypes.string,
  date: PropTypes.string,
  // value: PropTypes.any,
  // onClick: PropTypes.func,
  // setCurrentDate: PropTypes.func,
};
