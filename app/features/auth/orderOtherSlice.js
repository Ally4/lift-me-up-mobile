import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const OrderOtherSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderOtherStart: (state) => {
      console.log("in the start reducer")
      state.isLoading = true;
      state.error = null;
    },
    orderOtherSucess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    orderOtherFailure: (state, action) => {
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

export const { orderOtherStart, orderOtherSucess, orderOtherFailure, logout } = OrderOtherSlice.actions;
export default OrderOtherSlice.reducer;
