import { useState, useEffect } from 'react';

export default function ExJ09() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  return (
    <div className="spinWrap">
      {loading ? (
        <p>불러오는 중...</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
