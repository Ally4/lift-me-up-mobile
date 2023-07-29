import { configureStore } from '@reduxjs/toolkit';
import authLoginReducer from './features/auth/authLoginSlice';
import authSignupReducer from './features/auth/authSignupSlice';

const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
    authSignup: authSignupReducer
    // Add other reducers here if needed
  },
});

export default store;
