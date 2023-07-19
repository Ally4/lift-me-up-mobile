import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // console.log('>>>>>>>>>>>>>>>', initialState),
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
      console.log('>>>>>>>>>>>>>>>1', state);
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log('>>>>>>>>>>>>>>>2', state, action.payload);
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log('>>>>>>>>>>>>>>>3', state, initialState, 'iiiiiiiiii',action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      console.log('>>>>>>>>>>>>>>>4', state);
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
