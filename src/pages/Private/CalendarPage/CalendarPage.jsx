import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  // Link,
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

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const CalendarPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentDate = Object.values(useParams())[0].slice(-10);

  const pageName = 'Calendar';
  // const { currentDate } = useParams();

  // console.log(currentDate);

  const dispatch = useDispatch(); // add vlad
  const [todaysDate, setTodaysDate] = useState(''); // add vlad

  useEffect(() => {
    setTodaysDate(currentDate);
  }, [currentDate]);

  useEffect(() => {
    if (currentDate === todaysDate) return;
    if (todaysDate === '') {
      dispatch(getTasksThunk(currentDate.slice(0, 7)));
      return;
    }
    dispatch(getTasksThunk(todaysDate.slice(0, 7)));
  }, [dispatch, todaysDate, currentDate]);

  const handlePrev = () => {
    if (pathname.includes('day')) {
      const newDate = subDays(new Date(currentDate), 1);
      navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
      setTodaysDate(format(newDate, 'yyyy-MM-dd')); // add vlad
      return;
    }

    const newDate = subMonths(new Date(currentDate), 1);
    navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  };

  const handleNext = () => {
    if (pathname.includes('day')) {
      const newDate = addDays(new Date(currentDate), 1);
      navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
      setTodaysDate(format(newDate, 'yyyy-MM-dd')); // add vlad
      return;
    }

    const newDate = addMonths(new Date(currentDate), 1);
    navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  };

  // const [currentDate, setCurrentDate] = useState(getCurrentDate());

  // useEffect(() => {
  // 	if (!currentDate) setCurrentDate(getCurrentDate());

  // 	navigate(`calendar/month/${currentDate}`, { replace: true });
  // }, [navigate, currentDate]);

  return (
    <MainLayout>
      <CalendarContainer>
        <HeaderContainer>
          <Header pageName={pageName}/>
          {/* <h1>CalendarPage</h1> */}
        </HeaderContainer>
        {/* <Link to={`day/${currentDate}`}>Link day</Link> */}
        {/* <Link to={`month/${currentDate}`}>Link month</Link> */}

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

export default CalendarPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
