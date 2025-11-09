// checkboxSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: { checked: false },
  reducers: {
    toggleCheck: (state) => {
      state.checked = !state.checked;
    },
  },
});

export const { toggleCheck } = checkboxSlice.actions;
export default checkboxSlice.reducer;
