import React from 'react';
import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader.jsx';
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
          <Header pageName="My Account" />
        </HeaderContainer>
        <UserForm />
        {IsRefreshing && <Loader />}
      </CalendarContainer>
    </MainLayout>
  );
};

export default AccountPage;
