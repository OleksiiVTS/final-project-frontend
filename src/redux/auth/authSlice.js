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
  update,
  deleteUser,
  resendEmail,
} from './authOperations';

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
        if (payload.user) {
          state.dataUser = payload.user;
          state.token = payload.user.token;
          state.isLoggedIn = true;
        }
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
      .addCase(update.fulfilled, (state, action) => {
        state.dataUser = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        if (payload.token) state.token = payload.token;
        state.dataUser = payload.data;
        state.isLoggedIn = true;

        state.isRefreshing = false; //!
      })
      .addCase(getUser.pending, state => {
        state.isRefreshing = true; //!
      })
      .addCase(getUser.rejected, state => {
        state.isRefreshing = false; //!
      })
      .addCase(deleteUser.fulfilled, state => {
        state.dataUser = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(
          isPending(
            register,
            login,
            update,
            logoutUser,
            getUser,
            deleteUser,
            resendEmail
          )
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          isRejected(
            register,
            login,
            update,
            logoutUser,
            getUser,
            deleteUser,
            resendEmail
          )
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          isFulfilled(
            register,
            login,
            update,
            logoutUser,
            getUser,
            deleteUser,
            resendEmail
          )
        ),
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
