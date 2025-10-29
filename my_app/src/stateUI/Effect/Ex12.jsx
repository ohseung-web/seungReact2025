import React, { useEffect } from 'react';

export default function Ex02() {
  useEffect(() => {
    // 브라우저 탭 제목을 변경
    // document.title은 브라우저 탭에 표시되는 텍스트
    document.title = 'Welcome to React!';

    // 마운트 시에만 실행되도록 빈 배열 전달
  }, []);

  return (
    <div className="box">
      <h1>Title Changer</h1>
      <p className="subtitle">
        브라우저 탭을 확인해보세요!
        <br />
        제목이 "Welcome to React!"로 변경되었습니다.
      </p>
    </div>
  );
}
