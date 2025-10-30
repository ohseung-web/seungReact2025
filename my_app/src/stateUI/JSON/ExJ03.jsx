import { useState, useEffect } from 'react';
import '../JSON/ExJ03.css';

export default function ExJ03() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrap">
      <h2>사용자 다시 불러오기</h2>
      <button onClick={fetchData}>데이터 다시 불러오기</button>
      {loading ? (
        <p>⏳ 로딩중...</p>
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
