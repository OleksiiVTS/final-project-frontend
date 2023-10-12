import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from './auth/authSlice';
// import { tasksReducer } from "";
// import { reviewsReducer } from "";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // task: tasksReducer,
    // review: reviewsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
