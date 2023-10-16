import { createAsyncThunk } from '@reduxjs/toolkit';
import * as taskAPI from '../task/tasksAPI';

export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (_, thunkAPI) => {
    try {
      const tasks = await taskAPI.getTasks();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask, thunkAPI) => {
    try {
      const tasks = await taskAPI.addTask(newTask);
      return tasks;
    } catch (e) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskID, thunkAPI) => {
    try {
      const tasks = await taskAPI.deleteTask(taskID);
      return tasks;
    } catch (e) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (task, thunkAPI) => {
    try {
      console.log('thunk');
      const tasks = await taskAPI.editTask(task);
      return tasks;
    } catch (e) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);
