import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './LoginSlice'

export const store = configureStore({
  reducer: {
    Login: LoginReducer,
  },
});
