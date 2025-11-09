// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './listSlice';
import { useState } from 'react';

export default function ListApp() {
  const items = useSelector((state) => state.list.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addItem(input));
          setInput('');
        }}
      >
        추가
      </button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
