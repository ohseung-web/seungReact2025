import { useEffect, useState } from 'react';

// EffectApp8.jsx — “의존성 배열로 재호출 제어”
export default function Eff08() {
  const [reload, setReload] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [reload]);

  return (
    <div>
      <button onClick={() => setReload(!reload)}>다시 불러오기</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
