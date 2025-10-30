import { useState, useEffect } from 'react';

export default function ExJ10() {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어
  const [results, setResults] = useState([]); // 결과 목록
  const [loading, setLoading] = useState(false); // 로딩 상태

  useEffect(() => {
    // 3글자 미만이면 fetch 요청하지 않음
    if (searchTerm.length < 3) {
      setResults([]); // 이전 결과 초기화
      return;
    }

    // 입력 후 0.5초 동안 입력이 없으면 요청 시작 (디바운스)
    const timer = setTimeout(() => {
      setLoading(true); // 로딩 시작
      console.log('🔍 검색 요청 시작:', searchTerm);

      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          console.log('✅ 가져온 데이터:', data); // 콘솔 출력
          const filtered = data.filter((u) =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setResults(filtered); // 필터된 결과 저장
        })
        .catch((err) => console.error('❌ 에러 발생:', err))
        .finally(() => {
          setLoading(false); // 로딩 종료
        });
    }, 500);

    // cleanup (입력 중 요청 중단)
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="search">
      <h2>🔎 3글자 이상 입력 시 사용자 검색</h2>
      <input
        type="text"
        placeholder="이름 입력 (예: Leanne)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 로딩 상태 표시 */}
      {loading && <p className="loading">⏳ 불러오는 중...</p>}

      {/* 검색 결과 표시 */}
      <ul>
        {results.length > 0
          ? results.map((u) => <li key={u.id}>{u.name}</li>)
          : !loading && searchTerm.length >= 3 && <p>❌ 검색 결과 없음</p>}
      </ul>
    </div>
  );
}
