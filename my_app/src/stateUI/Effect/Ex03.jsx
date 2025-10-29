import React, { useEffect, useState } from 'react';

export default function Ex03() {
  // 카운터 상태
  const [count, setCount] = useState(0);

  // count가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    // count 값이 변경될 때마다 콘솔에 출력
    console.log(`현재 카운트: ${count}`);

    // 의존성 배열에 count를 추가하면
    // count가 변경될 때마다 이 함수가 다시 실행됨
  }, [count]); // <- count를 감시

  // 증가 버튼 핸들러
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // 감소 버튼 핸들러
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-box">
      <h2>Counter with useEffect</h2>
      <div className="count">{count}</div>
      <div>
        <button className="btn" onClick={handleDecrement}>
          -
        </button>
        <button className="btn" onClick={handleIncrement}>
          +
        </button>
      </div>
      <p style={{ marginTop: '30px', color: '#666' }}>
        콘솔을 확인하세요! 카운트가 변경될 때마다 로그가 출력됩니다.
      </p>
    </div>
  );
}
