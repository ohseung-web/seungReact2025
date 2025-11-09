// toggleSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { show: true },
  reducers: {
    toggleText: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleText } = toggleSlice.actions;
export default toggleSlice.reducer;
