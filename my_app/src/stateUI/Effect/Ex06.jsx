import React, { useEffect, useState } from 'react';

// 부모 컴포넌트
export default function Ex06() {
  // 컴포넌트 표시 여부 상태
  const [isVisible, setIsVisible] = useState(false);

  // 토글 핸들러
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <h1>Lifecycle Demo</h1>
      <button className="toggle-btn" onClick={handleToggle}>
        {isVisible ? '컴포넌트 숨기기' : '컴포넌트 보기'}
      </button>

      {/* 조건부 렌더링: isVisible이 true일 때만 렌더링 */}
      {isVisible && <ChileEx06 />}

      <p className="info">
        F12를 눌러 콘솔을 확인하세요!
        <br />
        컴포넌트의 마운트/언마운트 메시지가 출력됩니다.
      </p>
    </div>
  );
}

// 자식 컴포넌트
function ChileEx06() {
  useEffect(() => {
    // 마운트 시 실행
    console.log('컴포넌트가 마운트되었습니다!');

    // cleanup 함수: 언마운트 시 실행
    return () => {
      console.log('컴포넌트가 언마운트되었습니다!');
    };
  }, []); // 빈 배열: 마운트/언마운트 시에만 실행

  return (
    <div className="message-box">
      안녕하세요! 저는 토글 가능한 컴포넌트입니다!
    </div>
  );
}
