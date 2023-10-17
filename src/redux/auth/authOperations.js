import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const $instance = axios.create({
  baseURL: 'https://final-project-backend-6uyr.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
});

const token = {
  set(token) {
    $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    $instance.defaults.headers.common.Authorization = '';
  },
};

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token.token;
  if (!persistToken) {
    return thunkAPI.rejectWithValue('Error, no valid token');
  }
  try {
    token.set(persistToken);
    const { data } = await $instance.get('/users/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instance.post('/users/register', user);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    console.log(user);
    const { data } = await $instance.post('/users/login', user);
    token.set(data);

    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await $instance.post('/users/logout');
      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
