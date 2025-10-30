import { useState, useEffect } from 'react';

export default function ExFatch() {
  // 1. 상태 변수들
  const [loading, setLoading] = useState(true); // 로딩중 표시
  const [data, setData] = useState([]); // 가져온 데이터 저장
  const [error, setError] = useState(null); // 에러 메시지 저장

  useEffect(() => {
    console.log('데이터 요청 시작');

    fetch('https://jsonplaceholder.typicode.com/userss')
      .then((res) => {
        if (!res.ok) {
          // HTTP 상태 코드 확인
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json(); // JSON 파싱 (Promise)
      })
      .then((result) => {
        console.log('가져온 데이터:', result);
        setData(result); // 상태 저장
      })
      .catch((err) => {
        console.error('X 에러 발생:', err);
        setError(err.message); // 에러 상태 저장
      })
      .finally(() => {
        console.log('요청 완료');
        setLoading(false); // 로딩 종료
      });
  }, []);

  // 2. 화면 표시
  if (loading) return <p>데이터 불러오는 중...</p>;
  if (error) return <p style={{ color: 'red' }}>X 에러: {error}</p>;

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
