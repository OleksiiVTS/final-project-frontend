import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import {
  getUser,
  register,
  login,
  logoutUser,
  fetchingCurrentUser,
  updateUser,
} from './authOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        return {
          ...state,
          dataUser: payload,
          token: payload.token,
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
      .addCase(fetchingCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchingCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchingCurrentUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // return { ...state, ...payload };
        state.user = payload.user;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
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
          toast.error(state.error);
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
