// 2단계. store 만들기 (store.js)

// Redux의 중앙 저장소 역할을 하는 부분이다.
// slice를 store에 등록해야 컴포넌트에서 사용할 수 있다.
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './counterSlice';
import todoReducer from './todoSlice'; // 추가
import authReducer from './authSlice';
// import cartReducer from './cartSlice';
import ProdutReducer from '../src/store/productSlice';
import cartReducer from '../src/store/CartSlice';
import Cart01Reducer from './cartSlice';

export const store = configureStore({
  reducer: {
    counter: countReducer, // slice 등록 (key는 state 이름)
    todo: todoReducer, // 등록
    auth: authReducer, // 등록
    cart: cartReducer, // 등록
    products: ProdutReducer,
    cart01: Cart01Reducer,
  },
});
