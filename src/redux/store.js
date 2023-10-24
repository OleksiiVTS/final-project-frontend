import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { reviewsReducer } from './review/reviewSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { taskReducer } from './task/taskSlice';
import { headerReducer } from './header/headerSlice';
import storage from 'redux-persist/lib/storage';

const ThemePersistConfig = {
  key: 'theme',
  storage,
};

const appReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  review: reviewsReducer,
  header: persistReducer(ThemePersistConfig, headerReducer),
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



// import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from './auth/authSlice';
// // import { tasksReducer } from "";
// import { reviewsReducer } from './review/reviewSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { taskReducer } from './task/taskSlice';
// import { headerReducer } from './header/headerSlice';
// import storage from 'redux-persist/lib/storage';

// const ThemePersistConfig = {
//   key: 'theme',
//   storage,
// };

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     tasks: taskReducer,
//     review: reviewsReducer,
//     header: persistReducer(ThemePersistConfig, headerReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
