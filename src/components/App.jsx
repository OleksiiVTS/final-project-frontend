import { Suspense, useEffect } from 'react';
import loadable from '@loadable/component';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound.jsx';

import { Circles } from 'react-loader-spinner';
import css from '../components/Loader/Loader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectLoggedIn,
  selectToken,
} from 'redux/auth/authSelectors.js';

import TestPage from 'pages/Private/TestPage';
import { getUser } from 'redux/auth/authOperations';
import { getCurrentDate } from 'utils/calendar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthenticated = useSelector(selectLoggedIn);
  const token = useSelector(selectToken);
  const currentDate = getCurrentDate();

  useEffect(() => {
    if (!token || isAuthenticated) return;
    dispatch(getUser());
  }, [dispatch, token, isAuthenticated]);

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
            path="/calendar/*"
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
              !isAuthenticated ? (
                <LoginPage />
              ) : (
                <Navigate
                  replace={true}
                  to={`/calendar/month/${currentDate}`}
                />
              )
            }
          />
          <Route
            path="/register"
            element={
              !isAuthenticated ? (
                <RegisterPage />
              ) : (
                <Navigate
                  replace={true}
                  to={`/calendar/month/${currentDate}`}
                />
              )
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
        <ToastContainer />
      </Suspense>
    </main>
  );
};
