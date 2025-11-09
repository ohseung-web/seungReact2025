// 1️⃣ Redux Toolkit의 createSlice 함수 import
//    - 액션(action)과 리듀서(reducer)를 한 번에 생성할 수 있는 RTK 공식 함수
import { createSlice } from '@reduxjs/toolkit';

// 2️⃣ 슬라이스 생성
//    - 상태(initialState)와 리듀서(reducers)를 정의
//    - name: 슬라이스 이름, state key로도 사용 가능
const counterSlice = createSlice({
  name: 'counter', // 슬라이스 이름, Redux DevTools 등에서 표시됨
  initialState: { value: 0 }, // 초기 상태값
  reducers: {
    // 상태를 변경하는 함수 모음
    increment: (state) => {
      // 증가 액션
      state.value += 1; // Immer가 내장되어 직접 상태 변경 가능
    },
    decrement: (state) => {
      // 감소 액션
      state.value -= 1;
    },
    reset: (state) => {
      // 초기화 액션
      state.value = 0;
    },
  },
});

// 3️⃣ 액션 생성자(export)
//    - 컴포넌트에서 dispatch 시 사용
export const { increment, decrement, reset } = counterSlice.actions;

// 4️⃣ 리듀서(export default)
//    - store.js에서 reducer로 등록
export default counterSlice.reducer;
