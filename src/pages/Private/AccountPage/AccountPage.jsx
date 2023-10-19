import React from 'react';
import MainLayout from '../../../components/MainLayout/MainLayout.jsx';

import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import UserForm from 'components/UserForm/UserForm.jsx';

const AccountPage = () => {
  const IsRefreshing = useSelector(selectIsRefreshing);
  // console.log(isUser);

  return (
    <MainLayout>
      {IsRefreshing ? (
        <Circles
          height="80"
          width="80"
          color="#4d78a9"
          // wrapperClass={css.loader}
        />
      ) : (
        <div>
          <h1> AccountForm</h1>
          <UserForm />
        </div>
      )}
    </MainLayout>
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
