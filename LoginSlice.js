// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// This is the initial state of the slice
const initialState = {
    email: "",
    password: "",
    userData : {},
};

export const LoginSlice = createSlice({
  name: 'login', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    OnLog: (state, action) => {
      // This is the reducer function for the deposit action
      const { email, password } = action.payload;
      axios.post('http://localhost:1234/api/v1/auth/login' , {email , password}).then((res)=>{
        if(res.user){
        state.userData = res.user
        }})
    },
    withdraw: (state, action) => {
      // This is the reducer function for the withdraw action
      state.value -= action.payload;
    },
    deposit: (state, action) => {
        // This is the reducer function for the withdraw action
        state.value -= action.payload;
      },
  },
});

// Action creators are generated for each case reducer function
export const { deposit, withdraw, OnLog } = LoginSlice.actions;

// We export the reducer function so that it can be added to the store
export default LoginSlice.reducer;