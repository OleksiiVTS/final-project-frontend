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
      authToken.set(data.token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await $instance.post('/users/login', user);
    authToken.set(data.token);
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
      authToken.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchingCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    authToken(persistedToken);
    try {
      const { data } = await axios.get('/user/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (dataUser, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user/info', dataUser);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
