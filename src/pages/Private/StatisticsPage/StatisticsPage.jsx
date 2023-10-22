import React, { useEffect, useState } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';
import StatisticsChart from 'components/Statistics/StatisticsChart/StatisticsChart';
// import Header from 'components/Header/Header';
import { getCurrentDate } from 'utils/calendar';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'redux/task/taskOperations';
import { HeaderContainer } from '../CalendarPage/CalendarPage.styled';
import Header from 'components/Header/Header';
import { selectTheme } from 'redux/header/headerSlice';
import { CalendarContainer } from 'components/Calendar/common';
import PeriodPaginator from 'components/Statistics/PeriodPaginator/PeriodPaginator';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addDays, format, subDays } from 'date-fns';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const StatisticsPage = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const currentDay = getCurrentDate();
  console.log('currentDay: ', currentDay);

  const requestDate = currentDay.slice(0, 7);

  useEffect(() => {
    dispatch(getTasks(requestDate));
  }, [dispatch, requestDate]);

  const handlePrev = () => {
    subDays(new Date(currentDay), 1);
  };

  const handleNext = () => {
    addDays(new Date(currentDay), 1);
  };

  return (
    <MainLayout>
      <CalendarContainer bgcolor={theme === 'dark' ? '#171820' : '#f7f6f9'}>
        <HeaderContainer>
          <Header pageName='Statistics'/>
        </HeaderContainer>
        <PeriodPaginator
          today={currentDay}
          onClickPrev={handlePrev}
          onClickNext={handleNext}
        />
        <div>
          <div>{/* <h1>Statistics</h1> */}</div>
          <StatisticsChart today={requestDate} />
        </div>
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
