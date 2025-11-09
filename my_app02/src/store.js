// createStore 최소선은 앞으로는 사라질 예정이니 
// 새 방식으로 바꿔 써라”는 경고 표시
// Redux 최신 버전(>= 4.2, 특히 Toolkit 통합 이후)에서는
// createStore()를 더 이상 공식적으로 권장하지 않는다.
import { createStore } from 'redux';
import counterReducer from './counterReducer';

export const store = createStore(counterReducer);

