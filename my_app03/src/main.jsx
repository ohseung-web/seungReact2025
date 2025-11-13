import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

// 3단계. App 전역에 store 연결하기 (main.jsx)

// React와 Redux를 연결하는 부분이다.
// <Provider>로 감싸서 하위 컴포넌트들이
// useSelector, useDispatch를 사용할 수 있게 해준다.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
