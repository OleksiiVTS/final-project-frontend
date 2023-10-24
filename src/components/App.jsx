import { Suspense, useEffect } from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound.jsx';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectLoggedIn,
  selectToken,
} from 'redux/auth/authSelectors.js';

import { getUser } from 'redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import VerifiedPage from 'pages/Public/VerifiedPage.jsx';

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

  useEffect(() => {
    if (!token || isAuthenticated) return;
    dispatch(getUser());
  }, [dispatch, token, isAuthenticated]);

  const Loading = <Loader />;

  if (isRefreshing && !isAuthenticated) {
    return Loading;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verified/:token" element={<VerifiedPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/calendar/*" element={<CalendarPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};
