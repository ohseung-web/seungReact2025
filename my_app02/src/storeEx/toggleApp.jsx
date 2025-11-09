// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleText } from './toggleSlice';

export default function ToggleApp() {
  const show = useSelector((state) => state.toggle.show);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleText())}>텍스트 토글</button>
      {show && <p>안녕하세요! Redux Toolkit 실습중</p>}
    </div>
  );
}
