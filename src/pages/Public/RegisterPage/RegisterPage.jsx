import React from 'react';
// import { Circles } from 'react-loader-spinner'; //! Спинер
import RegisterForm from '../../../components/RegisterForm/RegisterForm.jsx';

const RegisterPage = () => {
  return <RegisterForm></RegisterForm>;
};

export default RegisterPage;

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
