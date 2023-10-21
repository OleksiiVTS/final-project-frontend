import React from 'react';
import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import UserForm from 'components/UserForm/UserForm.jsx';
import { HeaderContainer } from '../CalendarPage/CalendarPage.styled.jsx';
import Header from 'components/Header/Header.jsx';
import { CalendarContainer } from 'components/Calendar/common/index.js';
import { selectTheme } from 'redux/header/headerSlice.js';

const AccountPage = () => {
  const IsRefreshing = useSelector(selectIsRefreshing);
  const theme = useSelector(selectTheme);

  return (
    <MainLayout>
      <CalendarContainer bgcolor={theme === 'dark' ? '#171820' : '#f7f6f9'}>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        {IsRefreshing ? (
          <Circles
            height="80"
            width="80"
            color="#4d78a9"
            // wrapperClass={css.loader}
          />
        ) : (
          <UserForm />
        )}
      </CalendarContainer>
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
