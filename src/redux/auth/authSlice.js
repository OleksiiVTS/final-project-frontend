import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { getUser, createUser, loginUser, logoutUser } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    dataUser: null,
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.dataUser = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.dataUser = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.dataUser = null;
        state.token = null;
        state.dataContacts = [];
        state.isLoggedIn = false;
      })
      .addCase(getUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.dataUser = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(isPending(createUser, loginUser, logoutUser, getUser)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(isRejected(createUser, loginUser, logoutUser, getUser)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(isFulfilled(createUser, loginUser, logoutUser, getUser)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const authReducer = persistReducer(
  {
    key: 'ist_contacts',
    storage,
    whitelist: ['token'],
  },
  authSlice.reducer
);
