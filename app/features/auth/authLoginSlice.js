import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authLogSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {
    loginStart: (state) => {
      console.log("sssssssssssssss", ),
      state.isLoading = true;
      state.error = null;
      console.log("sssssssssssssss 1", )
    },
    loginSuccess: (state, action) => {
      console.log("sususususussusususus", ),
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log("sususususussusususus 1", )
    },
    loginFailure: (state, action) => {
      console.log("fafafafaafafafafafafa", ),
      state.isLoading = false;
      state.error = action.payload;
      console.log("fafafafaafafafafafafa 1",  state.error)
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});



export const { loginStart, loginSuccess, loginFailure, logout } = authLogSlice.actions;
export default authLogSlice.reducer;
// export default authLogSlice;
