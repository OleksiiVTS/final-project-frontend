import React, { useEffect } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';
import StatisticsChart from 'components/Statistics/StatisticsChart';
// import Header from 'components/Header/Header';
import { getCurrentDate } from 'utils/calendar';
import { useDispatch } from 'react-redux';
import { getTasks } from 'redux/task/taskOperations';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const StatisticsPage = () => {
  const currentDate = getCurrentDate().slice(0, 7);
  console.log('currentDate: ', currentDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks(currentDate));
  }, [dispatch, currentDate]);

  return (
    <MainLayout>
      <div>
        <div>
          <h1>Statistics</h1>
        </div>
        {/* <Header /> */}
        <StatisticsChart />
        {/* <Suspense fallback={null}>
          <CalendarToolbar
            onClickPrev={handlePrev}
            onClickNext={handleNext}
            today={currentDate}
          />
        </Suspense> */}
      </div>
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
