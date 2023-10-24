import { useEffect, useRef, useState } from 'react';
import { addDays, format, subDays } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from 'components/MainLayout/MainLayout';
import StatisticsChart from 'components/Statistics/StatisticsChart/StatisticsChart';
import { HeaderContainer } from '../CalendarPage/CalendarPage.styled';
import Header from 'components/Header/Header';
import { CalendarContainer } from 'components/Calendar/common';
import { getTasks } from 'redux/task/taskOperations';
import { selectTheme } from 'redux/header/headerSlice';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const prevMonthRef = useRef(null);

  useEffect(() => {
    const currentMonth = format(date, 'MM');
    if (prevMonthRef.current === currentMonth) return;
    prevMonthRef.current = currentMonth;
    dispatch(getTasks(format(date, 'yyyy-MM-dd').slice(0, 7)));
  }, [dispatch, date]);

  const handlePrev = () => {
    setDate(subDays(date, 1));
  };

  const handleNext = () => {
    setDate(addDays(date, 1));
  };

  const theme = useSelector(selectTheme);
  return (
    <MainLayout>
      <CalendarContainer bgcolor={theme === 'dark' ? '#171820' : '#f7f6f9'}>
        <HeaderContainer>
          <Header pageName="Statistics" />
        </HeaderContainer>

        <StatisticsChart
          onClickPrev={handlePrev}
          onClickNext={handleNext}
          setDate={setDate}
          date={date}
        ></StatisticsChart>
      </CalendarContainer>
    </MainLayout>

    // {isLoading && !error && (
    //     <Circles
    //       height="80"
    //       width="80"
    //       color="#4d78a9"
    //!       wrapperClass={css.loader}
    //     />
    //   )}
  );
};

export default StatisticsPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
