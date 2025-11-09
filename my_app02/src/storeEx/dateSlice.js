// dateSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
  name: 'date',
  initialState: { selected: '' },
  reducers: {
    selectDate: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { selectDate } = dateSlice.actions;
export default dateSlice.reducer;
