import React, { useEffect } from 'react';

function Ex01() {
  // useEffect: 컴포넌트의 생명주기(마운트, 업데이트, 언마운트)를 다루는 Hook
  useEffect(() => {
    // 이 함수는 컴포넌트가 화면에 처음 나타날 때 실행됨
    console.log('컴포넌트가 마운트되었습니다!');

    // 빈 배열([])을 의존성으로 전달하면 마운트 시 한 번만 실행
  }, []); // <- 의존성 배열이 비어있으므로 마운트 시에만 실행

  return (
    <div className="container">
      <h1>useEffect 기본 예제</h1>
      <p className="info">
        F12를 눌러 콘솔을 확인해보세요!
        <br />
        "컴포넌트가 마운트되었습니다!" 메시지가 출력됩니다.
      </p>
    </div>
  );
}

export default Ex01;
