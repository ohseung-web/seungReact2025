import { useState, useEffect } from 'react';
import '../JSON/ExJ04.css';
export default function ExJ04() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); // userId 바뀔 때마다 다시 fetch 실행

  return (
    <div className="box">
      <h3>현재 선택된 사용자 ID: {userId}</h3>
      <button onClick={() => setUserId((prev) => prev + 1)}>
        다음 사용자 보기
      </button>
      {user && (
        <div className="card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}
