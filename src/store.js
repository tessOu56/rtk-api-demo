import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});