import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound.jsx';
import { Circles } from 'react-loader-spinner';
import css from '../components/Loader/Loader.module.css';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';

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
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={Loading}>
            <MainLayout />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
