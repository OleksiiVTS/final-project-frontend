import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CalendarDate from '../CalendarDate/CalendarDate';
import { selectTheme } from 'redux/header/headerSlice';
import { ChevronLeft, ChevronRight } from '../../Calendar/icons';
import {
  Wrapper,
  ButtonsWrapper,
  ButtonLeft,
  ButtonRight,
} from '../PeriodPaginator/PeriodPaginator.styled';

const PeriodPaginator = ({ date, onClickPrev, onClickNext, setDate }) => {
  const theme = useSelector(selectTheme);
  return (
    <Wrapper>
      <CalendarDate date={date} setDate={setDate} />

      <ButtonsWrapper>
        <ButtonLeft
          onClick={() => onClickPrev()}
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
          onClick={() => onClickNext()}
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
  // currentDateData: PropTypes.func,
  // onClickPrev: PropTypes.func.isRequired,
  // onClickNext: PropTypes.func.isRequired,
  // type: PropTypes.string,
  date: PropTypes.object,
};
