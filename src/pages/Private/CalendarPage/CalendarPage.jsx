import { Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';

import { HeaderContainer } from './CalendarPage.styled.jsx';
import Header from 'components/Header/Header.jsx';
import { CalendarToolbar } from 'components/Calendar/common';
import { CalendarContainer } from 'components/Calendar/common';
import ChoosedMonth from 'components/Calendar/month/ChoosedMonth';

import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay.jsx';

import { getTasks as getTasksThunk } from 'redux/task/taskOperations';
import { selectTheme } from 'redux/header/headerSlice.js';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useSelector(selectTheme);

  const currentDate = pathname.slice(-10);
  const prevMonthRef = useRef(null);

  useEffect(() => {
    const currentMonth = pathname.slice(-5).slice(0, 2);
    if (prevMonthRef.current === currentMonth) return;

    prevMonthRef.current = currentMonth;
    const requestDate = currentDate.slice(0, 7);

    dispatch(getTasksThunk(requestDate));
  }, [dispatch, currentDate, pathname]);

  const handlePrev = () => {
    if (pathname.includes('day')) {
      const newDate = subDays(new Date(currentDate), 1);
      navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
      return;
    }

    const newDate = subMonths(new Date(currentDate), 1);
    navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  };

  const handleNext = () => {
    if (pathname.includes('day')) {
      const newDate = addDays(new Date(currentDate), 1);
      navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
      return;
    }

    const newDate = addMonths(new Date(currentDate), 1);
    navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  };

  return (
    <MainLayout>
      <CalendarContainer bgcolor={theme === 'dark' ? '#171820' : '#f7f6f9'}>
        <HeaderContainer>
          <Header pageName="Calendar" />
        </HeaderContainer>

        <Suspense fallback={null}>
          <CalendarToolbar
            onClickPrev={handlePrev}
            onClickNext={handleNext}
            today={currentDate}
            theme={theme}
          />
          <Routes>
            <Route
              path="/month/:currentDate"
              element={<ChoosedMonth theme={theme} />}
            />
            <Route
              path="/day/:currentDate"
              element={<ChoosedDay theme={theme} />}
            />
          </Routes>
        </Suspense>
      </CalendarContainer>
    </MainLayout>
  );
};

export default CalendarPage;
