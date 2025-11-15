import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// 반드시 axios 설치한다.
//  npm install axios

// API 요청
export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=20');
    return res.data.products;
  }
);
// 상품 가져오기(loadProducts)는 createAsyncThunk → extraReducers에서 처리해야 한다.
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
});

export default productSlice.reducer;
