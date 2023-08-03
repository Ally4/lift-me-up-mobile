import { configureStore } from '@reduxjs/toolkit';
import authLoginReducer from './features/auth/authLoginSlice';
import authSignupReducer from './features/auth/authSignupSlice';
import authResetReducer from './features/auth/authResetSlice';

const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
    authSignup: authSignupReducer,
    authReset: authResetReducer
    // Add other reducers here if needed
  },
});

export default store;
