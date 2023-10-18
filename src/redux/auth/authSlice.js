import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { getUser, register, login, logoutUser } from './authOperations';

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
      .addCase(register.fulfilled, (state, { payload }) => {
        state.dataUser = payload;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        return {
          ...state,
          token: payload,
          isLoggedIn: true,
        };
      })
      .addCase(logoutUser.fulfilled, state => {
        state.dataUser = null;
        state.token = null;
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
        isAnyOf(isPending(register, login, logoutUser, getUser)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(isRejected(register, login, logoutUser, getUser)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(isFulfilled(register, login, logoutUser, getUser)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const authReducer = persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['token'],
  },
  authSlice.reducer
);
