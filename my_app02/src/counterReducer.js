// 상태(state)의 초기값 설정
// - Redux에서는 반드시 초기 상태를 정의해야 함
// - 앱이 시작될 때 state가 undefined인 경우, 이 값이 기본으로 사용됨
const initialState = { count: 0 };

// 리듀서 함수 (Reducer Function)
// - "상태(state)"와 "액션(action)"을 받아서 새로운 상태를 반환하는 순수 함수
// - 기존 state를 직접 변경하지 않고, 항상 새로운 객체를 반환해야 함
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    // 카운트 증가 액션
    // { type: 'INCREMENT' } 가 전달되면 count를 +1 시킴
    case 'INCREMENT':
      return { count: state.count + 1 };

    // 카운트 감소 액션
    // { type: 'DECREMENT' } 가 전달되면 count를 -1 시킴
    case 'DECREMENT':
      return { count: state.count - 1 };

    // 그 외의 액션 (매칭되지 않는 경우)
    // state를 그대로 반환 (즉, 아무 변화 없음)
    default:
      return state;
  }
}
