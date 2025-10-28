import { useEffect, useState } from 'react';

// EffectApp10.jsx — “여러 useEffect 조합”
export default function Eff10() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');

  useEffect(() => console.log('count 변경:', count), [count]);
  useEffect(() => console.log('keyword 변경:', keyword), [keyword]);

  return (
    <div>
      <input onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
