// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheck } from './checkboxSlice';

export default function CheckApp() {
  console.log(
    'Redux 전체 상태:',
    useSelector((state) => state)
  );
  const checked = useSelector((state) => state.check.checked);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => dispatch(toggleCheck())}
      />
      <p>{checked ? '체크됨' : '체크 안됨'}</p>
    </div>
  );
}
