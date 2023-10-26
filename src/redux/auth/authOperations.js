import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const $instance = axios.create({
  baseURL: 'https://final-project-backend-6uyr.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
});

const authToken = {
  set(token) {
    $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    $instance.defaults.headers.common.Authorization = '';
  },
};

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue('Error, no valid token');
  }
  try {
    authToken.set(token);
    const { data } = await $instance.get('/users/current');
    return { data };
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instance.post('/users/register', user);
      if (data?.user?.token) authToken.set(data.user.token);
      return data;
    } catch (e) {
      // console.log(e);
      const text = e.response.data.message;
      return thunkAPI.rejectWithValue(text);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await $instance.post('/users/login', user);
    authToken.set(data.user.token);
    return data.user;
  } catch (e) {
    // console.log(e);
    const text = e.response.data.message;
    return thunkAPI.rejectWithValue(text);
  }
});

export const update = createAsyncThunk(
  'auth/update',
  async (user, thunkAPI) => {
    const { usrName, phone, birthday, skype, email, avatarURL } = user;
    const formData = new FormData();
    formData.append('username', usrName);
    formData.append('phone', phone);
    formData.append('birthday', birthday);
    formData.append('skype', skype);
    formData.append('email', email);
    formData.append('avatar', avatarURL.files[0]);
    try {
      const { data } = await $instance.patch(`/users/edit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data.updatedUser;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await $instance.post('/users/logout');
      authToken.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'auth/delete',
  async (email, thunkAPI) => {
    try {
      await $instance.delete(`/users/delete/${email}`);
      authToken.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getVerifiedUser = createAsyncThunk(
  'auth/getUser',
  async (token, thunkAPI) => {
    try {
      authToken.set(token);
      const { data } = await $instance.get('/users/current');
      return { data, token };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resendEmail = createAsyncThunk(
  'auth/resendEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await $instance.post('/users/verify', email);
      return data;
    } catch (e) {
      // console.log(e);
      const text = e.response.data.message;
      return thunkAPI.rejectWithValue(text);
    }
  }
);
