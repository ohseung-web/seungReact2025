// src/components/Counter.jsx

import React from 'react';

// 1️⃣ Redux Toolkit 훅 import
// useSelector : Redux state 읽기
// useDispatch : Redux action dispatch
import { useSelector, useDispatch } from 'react-redux';

// 2️⃣ 액션 생성자 import
// counterSlice에서 export한 increment, decrement, reset 액션
import { increment, decrement, reset } from '../store/counterSlice';

function Counter() {
  // 3️⃣ Redux state 가져오기
  // state.counter.value에서 counter 슬라이스의 value 상태를 읽음
  const count = useSelector((state) => state.counter.value);

  // 4️⃣ 액션을 디스패치할 수 있는 함수 생성
  const dispatch = useDispatch();

  return (
    <div>
      {/* 5️⃣ 현재 카운터 값 표시 */}
      <h1>카운터: {count}</h1>
      {/* 6️⃣ 버튼 클릭 시 각각 액션 디스패치 */}
      <button onClick={() => dispatch(increment())}>+</button> {/* 값 1 증가 */}
      <button onClick={() => dispatch(decrement())}>-</button> {/* 값 1 감소 */}
      <button onClick={() => dispatch(reset())}>Reset</button> {/* 값 초기화 */}
    </div>
  );
}

// 7️⃣ 컴포넌트 export
// App.jsx에서 import하여 사용 가능
export default Counter;
