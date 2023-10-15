import React from 'react';
// import { Circles } from 'react-loader-spinner'; //! Спинер

import LoginForm from '../../../components/LoginForm/LoginForm.jsx';

const LoginPage = () => {
  return <LoginForm></LoginForm>;
};

export default LoginPage;

// {isLoading && !error && (
//     <Circles
//       height="80"
//       width="80"
//       color="#4d78a9"
//!       wrapperClass={css.loader}
//     />
//   )}

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
