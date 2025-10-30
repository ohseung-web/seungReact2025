import { useState, useEffect } from 'react';
import '../JSON/ExJ06.css';
export default function ExJ06() {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/postss') // 일부러 오류 URL
      .then((res) => {
        if (!res.ok) throw new Error('데이터 요청 실패!');
        return res.json();
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="errorBox">
      {error ? <p className="error">{error}</p> : <p>정상 작동 중</p>}
    </div>
  );
}
