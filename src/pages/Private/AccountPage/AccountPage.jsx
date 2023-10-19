import React from 'react';
import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';

import { Circles } from 'react-loader-spinner';
import { UserInfo } from 'components/UserInfo/UserInfo.jsx';
import UserForm from 'components/UserForm/UserForm.jsx';

const AccountPage = () => {
  const IsRefreshing = useSelector(selectIsRefreshing);
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
        <>
          <UserInfo></UserInfo>
          <UserForm></UserForm>
        </>
      )}
    </MainLayout>
  );
};
export default AccountPage;

// // .loader {
// //     position: fixed;
// //     top: 0;
// //     width: 100%;
// //     height: 100%;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //   }
