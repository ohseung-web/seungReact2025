import { useState, useEffect } from 'react';
import UserList from './UserList';
// 자시 컴포넌트 UserList 분리
export default function ExJ08() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="wrap">
      <h2>컴포넌트 분리 연습</h2>
      <UserList users={users} />
    </div>
  );
}
