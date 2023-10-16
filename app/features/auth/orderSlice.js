import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderStart: (state) => {
      console.log("in the start reducer")
      state.isLoading = true;
      state.error = null;
    },
    orderSucess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    orderFailure: (state, action) => {
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

export const { orderStart, orderSucess, orderFailure, logout } = OrderSlice.actions;
export default OrderSlice.reducer;
