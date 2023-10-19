import { Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';

import { HeaderContainer } from './CalendarPage.styled.jsx';
import Header from 'components/Header/Header.jsx';
import { CalendarToolbar } from 'components/Calendar/common';
import { CalendarContainer } from 'components/Calendar/common';
import ChoosedMonth from 'components/Calendar/month/ChoosedMonth';

import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay.jsx';

import { getTasks as getTasksThunk } from 'redux/task/taskOperations';
import { selectTasks } from 'redux/task/taskSelectors';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tasks = useSelector(selectTasks);

  const currentDate = Object.values(useParams())[0].slice(-10);
  const requestDate = currentDate.slice(0, 7);

  const prevMonthRef = useRef(pathname.slice(-5).slice(0, 2));

  useEffect(() => {
    if (tasks.length > 0) return;

    dispatch(getTasksThunk(requestDate));
  }, [dispatch, requestDate, tasks.length]);

  useEffect(() => {
    if (tasks.length === 0) return;

    const currentMonth = pathname.slice(-5).slice(0, 2);
    if (prevMonthRef.current === currentMonth) return;

    prevMonthRef.current = currentMonth;
    dispatch(getTasksThunk(requestDate));
  }, [dispatch, requestDate, tasks.length, pathname]);

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
      <CalendarContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Suspense fallback={null}>
          <CalendarToolbar
            onClickPrev={handlePrev}
            onClickNext={handleNext}
            today={currentDate}
          />
          <Routes>
            <Route path="/month/:currentDate" element={<ChoosedMonth />} />
            <Route path="/day/:currentDate" element={<ChoosedDay />} />
          </Routes>
        </Suspense>
      </CalendarContainer>
    </MainLayout>
  );
};

export default CalendarPage;
