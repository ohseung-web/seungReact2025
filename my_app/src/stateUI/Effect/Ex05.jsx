import React, { useEffect, useState } from 'react';

export default function Ex05() {
  // 입력값 상태
  const [title, setTitle] = useState('');

  // title 상태가 변경될 때마다 실행
  useEffect(() => {
    // 입력값이 있으면 그 값을, 없으면 기본 제목을 설정
    if (title.trim() !== '') {
      document.title = title;
    } else {
      document.title = '제목을 입력하세요';
    }

    // title이 변경될 때마다 이 effect가 실행됨
  }, [title]); // title을 의존성 배열에 추가

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="input-container">
      <h1>Dynamic Title Generator</h1>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="브라우저 탭 제목을 입력하세요..."
      />
      <p className="hint">
        입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다!
      </p>
    </div>
  );
}
