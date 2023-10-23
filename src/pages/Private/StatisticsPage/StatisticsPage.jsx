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
import { addDays, subDays } from 'date-fns';


const StatisticsPage = () => {
  const [calendarDay, setCalendarDay] = useState('');
  // const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const currentDay = getCurrentDate();

  // useEffect(() => {
  //   dispatch(getTasks(currentDay))
  //   setDateData(currentDay);
  // },
  //   [currentDay, dispatch]);

  
  const currentDateData = childData => {
  setCalendarDay(childData);
  return childData;
};
  
  // const handlePrev = () => {
  //   subDays(new Date(dateData), 1);
  // };

  // const handleNext = () => {
  //   addDays(new Date(dateData), 1);
  // };

  return (
    <MainLayout>
      <CalendarContainer bgcolor={theme === 'dark' ? '#171820' : '#f7f6f9'}>
        <HeaderContainer>
          <Header pageName="Statistics" />
        </HeaderContainer>
        <PeriodPaginator
          currentDateData={currentDateData}
          today={currentDay}
          // onClickPrev={handlePrev}
          // onClickNext={handleNext}
        />
        <StatisticsChart currentDateData={calendarDay} />
      </CalendarContainer>
    </MainLayout>
  );
};

export default StatisticsPage;


