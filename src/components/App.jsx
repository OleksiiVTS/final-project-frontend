import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound.jsx';
import { Circles } from 'react-loader-spinner';
import css from '../components/Loader/Loader.module.css';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import PrivateRoute from './PrivateRoute';

const MainPage = loadable(() =>
  import('../pages/Public/MainPage/MainPage.jsx')
);
const RegisterPage = loadable(() =>
  import('../pages/Public/RegisterPage/RegisterPage.jsx')
);
const LoginPage = loadable(() =>
  import('../pages/Public/LoginPage/LoginPage.jsx')
);
const AccountPage = loadable(() =>
  import('../pages/Private/AccountPage/AccountPage.jsx')
);
const CalendarPage = loadable(() =>
  import('../pages/Private/CalendarPage/CalendarPage.jsx')
);
const StatisticsPage = loadable(() =>
  import('../pages/Private/StatisticsPage/StatisticsPage.jsx')
);

export const App = () => {
  const IsRefreshing = useSelector(selectIsRefreshing);
  const Loading = (
    <Circles height="80" width="80" color="#4d78a9" wrapperClass={css.loader} />
  );
  return IsRefreshing ? (
    Loading
  ) : (
    <main>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/login">
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/login">
                <CalendarPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute redirectTo="/login">
                <StatisticsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
};
