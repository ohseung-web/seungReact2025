// 4단계. 컴포넌트에서 상태 사용하기 (Counter.jsx)

// 이제 컴포넌트에서 useSelector로 상태를 읽고,
// useDispatch로 액션(increment, decrement 등)을 호출한다.
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value); //상태읽기
  const dispatch = useDispatch(); //액션 실행 준비

  const plushandler = () => {
    if (count >= 10) {
      alert('수량은 10개까지 가능');
    } else {
      dispatch(increment());
    }
  };
  const minushandler = () => {
    if (count <= 0) {
      alert('수량은 최소 1개');
    } else {
      dispatch(decrement());
    }
  };

  return (
    <div>
      <h1>카운터 : {count}</h1>
      <button type="button" onClick={plushandler}>
        +
      </button>
      <button type="button" onClick={minushandler}>
        -
      </button>
      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}
