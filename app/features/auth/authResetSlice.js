import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authResetSlice = createSlice({
  name: 'authReset',
  initialState,
  reducers: {
    resetStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    resetSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { resetStart, resetSuccess, resetFailure, logout } = authResetSlice.actions;
export default authResetSlice.reducer;
