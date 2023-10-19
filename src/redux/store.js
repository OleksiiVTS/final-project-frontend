import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
// import { tasksReducer } from "";
import { reviewsReducer } from './review/reviewSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { taskReducer } from './task/taskSlice';
import { headerReducer } from './header/headerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    review: reviewsReducer,
    header: headerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
