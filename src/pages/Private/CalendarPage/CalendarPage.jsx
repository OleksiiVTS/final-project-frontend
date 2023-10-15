import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay.jsx';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const CalendarPage = () => {
  return (
    <MainLayout>
      <div>
        <h1> CalendarPage</h1>
      </div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/day/:currentDay" element={<ChoosedDay />} />
        </Routes>
      </Suspense>
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
