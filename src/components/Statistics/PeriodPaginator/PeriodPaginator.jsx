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
import { useState } from 'react';

const PeriodPaginator = ({
  currentDateData,
  onClickPrev,
  onClickNext,
  today,
}) => {
  const [data, setData] = useState('');

  const theme = useSelector(selectTheme);

  const currentData = childData => {
    setData(childData);
  };

  const currentDate = parse(today, 'yyyy-MM-dd', new Date());
  return (
    <Wrapper>
      <CalendarDate
        currentData={currentData}
        date={currentDate}
        currentDateData={currentDateData(data)}
      />

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
