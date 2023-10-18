import React from 'react';
import MainLayout from '../../../components/MainLayout/MainLayout.jsx';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const AccountPage = () => {
  return (
    <MainLayout>
      <div>
        <h1> AccountPage</h1>
      </div>
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

export default AccountPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
