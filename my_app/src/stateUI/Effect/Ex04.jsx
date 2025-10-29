import React, { useEffect, useState } from 'react';

export default function Ex02() {
  // 경과 시간 (초 단위)
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // setInterval: 일정 시간마다 함수를 반복 실행
    // 1000ms(1초)마다 seconds를 1씩 증가
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      // prevSeconds: 이전 상태값을 받아서 사용
      // 이 방식이 더 안전함 (클로저 문제 방지)
    }, 1000);

    // cleanup 함수: 컴포넌트가 언마운트될 때 실행
    return () => {
      // 타이머를 정리(제거)하지 않으면 메모리 누수 발생
      clearInterval(intervalId);
      console.log('타이머가 정리되었습니다.');
    };
    // 빈 배열: 마운트 시 한 번만 타이머 시작
  }, []);

  return (
    <div className="timer-box">
      <h1> 자동 타이머</h1>
      <div className="time">{seconds}</div>
      <div className="label">초가 경과했습니다</div>
    </div>
  );
}
