import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound.jsx';
import { Circles } from 'react-loader-spinner';
import css from '../components/Loader/Loader.module.css';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import ChoosedDay from './ChoosedDay/ChoosedDay';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

const MainLayout = lazy(() =>
  import('../components/MainLayout/MainLayout.jsx')
);
// const MainPage = lazy(() => import('../pages/Public/MainPage/MainPage.jsx'));
// const RegisterPage = lazy(() =>
//   import('../pages/Public/RegisterPage/RegisterPage.jsx')
// );
// const LoginPage = lazy(() => import('../pages/Public/LoginPage/LoginPage.jsx'));
// const AccountPage = lazy(() =>
//   import('../pages/Private/AccountPage/AccountPage.jsx')
// );
// const CalendarPage = lazy(() =>
//   import('../pages/Private/CalendarPage/CalendarPage.jsx')
// );
// const StatisticsPage = lazy(() =>
//   import('../pages/Private/StatisticsPage/StatisticsPage.jsx')
// );

export const App = () => {
  const IsRefreshing = useSelector(selectIsRefreshing);
  const Loading = (
    <Circles height="80" width="80" color="#4d78a9" wrapperClass={css.loader} />
  );
  return IsRefreshing ? (
    Loading
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={Loading}>
            <MainLayout />
            <ChoosedDay />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />}></Route>
      {/* <Route path="*" element={<Day />} /> */}
    </Routes>
  );
};
