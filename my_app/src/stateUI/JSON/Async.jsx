import { useState, useEffect } from 'react';

export default function Async() {
  const [loading, setLoading] = useState(false); // 로딩 상태

  // useEffect: 컴포넌트가 마운트되면 비동기 함수 실행
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // 로딩 시작
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json(); // JSON 파싱
        console.log('가져온 데이터:', data);
      } catch (err) {
        console.error('에러 발생:', err);
      } finally {
        setLoading(false); // 로딩 종료
      }
    }
    fetchData(); // 비동기 함수 호출
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Async / Await로 데이터 가져오기</h2>
      {loading ? <p>데이터 불러오는 중...</p> : <p>완료</p>}
    </div>
  );
}
