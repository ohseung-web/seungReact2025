// src/store/store.js
// 1.Redux Toolkit의 configureStore 함수 import
//    - 스토어를 쉽게 생성할 수 있는 RTK 공식 함수
//    - 미들웨어, 개발자 도구 설정 등도 자동 처리
import { configureStore } from '@reduxjs/toolkit';

// 2.슬라이스 리듀서 import
//    - 각 기능별 상태 관리(예: counter, user, todo 등)
import counterReducer from './counterSlice';
import toggleRedux from '../storeEx/toggleSlice';
import listRedux from '../storeEx/listSlice';
import checkboxRedux from '../storeEx/checkboxSlice';
import cartRedux from '../storeEx/cartSlice';
import dateRedux from '../storeEx/dateSlice';
// 3.스토어 생성
//    - configureStore 안에 reducer 객체를 넣어 각 슬라이스 등록
//    - reducer 키는 state의 이름이 됨 (state.counter)
export const store = configureStore({
  reducer: {
    counter: counterReducer, // counterSlice를 state.counter로 등록
    // 나중에 다른 슬라이스를 추가할 때는 여기에 등록
    // 예: user: userReducer, todo: todoReducer
    toggle: toggleRedux,
    list: listRedux,
    check: checkboxRedux,
    cart: cartRedux,
    date: dateRedux,
  },

  // 선택 사항: 미들웨어 추가 가능
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),

  // 개발자 도구 자동 활성화 (기본값 true)
  // devTools: process.env.NODE_ENV !== 'production',
});
