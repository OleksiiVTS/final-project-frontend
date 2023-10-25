import { createSlice, isAnyOf, isPending, isRejected } from '@reduxjs/toolkit';
import {
  getTasks,
  addTask,
  deleteTask,
  editTask,
} from '../task/taskOperations';
import { logoutUser } from 'redux/auth/authOperations';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = [];
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload.task);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(
          task => task._id !== action.payload._id
        );
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedTask = state.tasks.find(
          task => task._id === action.payload._id
        );
        editedTask.title = action.payload.title;
        editedTask.start = action.payload.start;
        editedTask.end = action.payload.end;
        editedTask.priority = action.payload.priority;
        editedTask.category = action.payload.category;
        editedTask.date = action.payload.date;
      })
      .addMatcher(
        isAnyOf(isPending(logoutUser, getTasks, addTask, deleteTask, editTask)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          isRejected(logoutUser, getTasks, addTask, deleteTask, editTask)
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const taskReducer = taskSlice.reducer;
