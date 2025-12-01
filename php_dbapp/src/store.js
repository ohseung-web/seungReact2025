// 2단계 : store.js 만들기
// Redux의 중앙 저장소 역할을 하는 부분이다.
// Slice를 store에 등록해야 컴포넌트에서 사용할 수 있다.
import { configureStore } from '@reduxjs/toolkit';
//import countReducer from './ReduxToolkit/counterSlice';
// import cartReducer from './cartEx/cartSlice'
// import cartReducer from './store/CartSlice'
// productSlice를 import 한다.
import productsReducer from '../src/store/ProductSlice';
import cartReducer from '../src/store/CartSlice';

export const store = configureStore({
  reducer: {
    // counter은 counterSlice.js파일의 name:'counter'와 반드시 같아야 한다.
    // counter:countReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
