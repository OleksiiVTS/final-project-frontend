import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound.jsx';
import { Circles } from 'react-loader-spinner';
import css from '../components/Loader/Loader.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectLoggedIn,
} from 'redux/auth/authSelectors.js';

import TestPage from 'pages/Private/TestPage';

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
  const isRefreshing = useSelector(selectIsRefreshing);
  // const isAuthenticated = useSelector(selectLoggedIn);
  const isAuthenticated = true;

  const Loading = (
    <Circles height="80" width="80" color="#4d78a9" wrapperClass={css.loader} />
  );

  if (isRefreshing) {
    return Loading;
  }

  return (
    <main>
      <Suspense fallback={Loading}>
        <Routes>
          <Route
            path="/account"
            element={
              isAuthenticated ? <AccountPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/calendar"
            element={
              isAuthenticated ? <CalendarPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/statistics"
            element={
              isAuthenticated ? <StatisticsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/testpage"
            element={isAuthenticated ? <TestPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={
              !isAuthenticated ? <LoginPage /> : <Navigate to="/account" />
            }
          />
          <Route
            path="/register"
            element={
              !isAuthenticated ? <RegisterPage /> : <Navigate to="/account" />
            }
          />
          <Route
            path="/"
            element={
              !isAuthenticated ? <MainPage /> : <Navigate to="/account" />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};
