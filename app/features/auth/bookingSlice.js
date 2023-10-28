import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const BookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookingStart: (state) => {
      console.log("in the start reducer")
      state.isLoading = true;
      state.error = null;
    },
    bookingSucess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    bookingFailure: (state, action) => {
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

export const { bookingStart, bookingSucess, bookingFailure, logout } = BookingSlice.actions;
export default BookingSlice.reducer;
