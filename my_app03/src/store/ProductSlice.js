import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',

  // 저장할 기본 상태
  initialState: {
    items: [],
    loading: false,
  },

  // 동기적으로 상태를 변경하는 함수들
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setProducts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setLoading, setProducts } = productSlice.actions;
export default productSlice.reducer;
