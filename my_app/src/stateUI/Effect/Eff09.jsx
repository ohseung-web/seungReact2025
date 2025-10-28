import { useEffect, useState } from 'react';
// EffectApp9.jsx — “조건부 실행”
export default function Eff09() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!load) return;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [load]);

  return (
    <div>
      <button onClick={() => setLoad(true)}>데이터 불러오기</button>
      <ul>
        {data.slice(0, 5).map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
