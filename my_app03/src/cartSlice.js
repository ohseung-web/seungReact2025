import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart01',
  initialState: { items: [] },
  reducers: {
    // addItem: (state) => {
    //   state.items.push({ id: 1, name: '사과', price: 1000 });
    // },
    addItem: (state, action) => {
      state.items.push(action.payload); // {id, name, price}
    },
    removeItem: (state, action) => {
      const delIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (delIndex !== -1) {
        //찾는 항목이 존재하면
        // Redux Toolkit은 Immer(불변성)를 사용하기 때문에
        // state.items.splice()처럼 원본 배열을 직접 수정해도 안전하다.
        state.items.splice(delIndex, 1);
      }
      // state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
