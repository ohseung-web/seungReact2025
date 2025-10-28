import { useEffect, useState } from "react";

export default function UserList() {
  // 사용자 목록을 담을 state
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    // 1. 컴포넌트가 처음 렌더링될 때 실행
    fetch("https://jsonplaceholder.typicode.com/users")
      // 2. 서버에서 응답(Response)을 받으면 JSON으로 변환
      .then(res => res.json())
      // 3. 변환된 데이터를 users 상태에 저장
      .then(data => setUsers(data));
  }, []); // 4. [] → 마운트 시 1회만 실행

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
