import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner';
// import css from '../components/Loader/Loader.module.css';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export const App = () => {
  return (
    // <Circles height="80" width="80" color="#4d78a9" wrapperClass={css.loader} />
    <Routes>
      <Route>
        <div>
          <h1>New project!</h1>
        </div>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
