import React, { useEffect, useState } from 'react';

export default function Ex10() {
  // 🔹 검색어 상태
  const [searchTerm, setSearchTerm] = useState('');
  // 🔹 필터링된 사용자 목록
  const [filteredUsers, setFilteredUsers] = useState([]);

  // 🔹 미리 만들어둔 사용자 배열 (API 대신 사용)
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
  ];

  // 🔹 useEffect: searchTerm이 바뀔 때마다 실행
  useEffect(() => {
    // 검색어가 없으면 전체 사용자 표시
    if (!searchTerm.trim()) {
      setFilteredUsers(users);
      return;
    }

    // 이름 또는 이메일에 검색어 포함된 사용자만 필터링
    const results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(results); // 상태 업데이트 → 화면 자동 렌더링
  }, [searchTerm]); // searchTerm이 바뀔 때만 실행

  return (
    <div
      style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}
    >
      <h2>간단 사용자 검색</h2>

      {/* 검색 입력 */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="이름 또는 이메일 검색"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      {/* 검색 결과 */}
      <ul style={{ paddingLeft: '20px' }}>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>

      {/* 검색 결과 없음 안내 */}
      {filteredUsers.length === 0 && <div>검색 결과가 없습니다.</div>}
    </div>
  );
}
