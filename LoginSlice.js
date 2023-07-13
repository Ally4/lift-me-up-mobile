// Import the createSlice API from Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// import { useSelector, useDispatch } from 'react-redux'; // from debug


// This is the initial state of the slice
const initialState = {
    email: "",
    password: "",
    userData : {},
    loading: false,
    message: null,
    token: null
};




// const dispatch = useDispatch(); //from the debug

export const login = createAsyncThunk('Login', async ({email, password}) => {

  console.log('========********pppppp', email, password);

  const response = await axios.post('http://localhost:1234/api/v1/auth/login' ,{email , password}.then((res)=>{
         if(res.user){
         state.userData = res.user
         }
       // This is to set the token in the local storage
       localStorage.setItem('userToken', token)
       }))
       console.log('========********', response);
  return response
})

export const LoginSlice = createSlice({
  name: 'Login', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
   reducers: {
  //   // All the reducers go here
  //   OnLog: async (state, action, dispatch) => {
  //     // This is the reducer function for the deposit action
  //     const { email, password } = action.payload;
  //     await axios.post('http://localhost:1234/api/v1/auth/login' ,{email , password}.then((res)=>{
  //       if(res.user){
  //       state.userData = res.user
  //       }
  //     // This is to set the token in the local storage
  //     localStorage.setItem('userToken', token)
  //     }))
  //   },
  //   withdraw: (state, action) => {
  //     // This is the reducer function for the withdraw action
  //     state.value -= action.payload;
  //   },
  //   deposit: (state, action) => {
  //       // This is the reducer function for the withdraw action
  //       state.value -= action.payload;
  //     },
  },


  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        console.log('========1', payload);
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log('========2', payload);
        state.loading = false;
        state.token = payload.token;
        
        // state.message= payload.message
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log('========3', payload);
        state.loading = false;
        // state.message = payload.message
      })
  },
  }
);

// // Action creators are generated for each case reducer function
// export const { deposit, withdraw, OnLog } = LoginSlice.actions;

// We export the reducer function so that it can be added to the store
export default LoginSlice.reducer;

export const selectToken = (state) => state.token
  
// export default categoriesSlice.reducer