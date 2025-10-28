import { useState, useEffect } from 'react';

// EffectApp2.jsx — “렌더링마다 실행”

//목표: 의존성 배열이 없을 때의 실행 시점 이해
export default function Eff03() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('렌더링 발생!');
  });

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
