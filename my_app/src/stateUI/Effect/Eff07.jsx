import { useEffect, useState } from 'react';

// EffectApp7.jsx — “async/await 문법으로 변경”
export default function Eff07() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };
    load();
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.email}</li>
      ))}
    </ul>
  );
}
