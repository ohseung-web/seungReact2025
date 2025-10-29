import React, { useEffect, useState } from 'react';

export default function Ex07() {
  // 1️⃣ 현재 시간을 저장할 상태(state)를 만듭니다.
  const [currentTime, setCurrentTime] = useState(new Date());

  // 2️⃣ 컴포넌트가 화면에 나타날 때, 시간 업데이트를 시작합니다.
  useEffect(() => {
    // 1초마다 실행되는 함수(timer)
    const timer = setInterval(() => {
      const now = new Date(); // 현재 시간 가져오기
      setCurrentTime(now); // 상태를 업데이트하면 화면도 같이 바뀜
    }, 1000); // 1000ms = 1초

    // 3️⃣ cleanup 함수: 컴포넌트가 화면에서 사라질 때 timer를 멈춤
    return () => clearInterval(timer);
  }, []); // [] : 컴포넌트가 처음 나타날 때만 실행

  // 4️⃣ 시간, 분, 초를 2자리 숫자로 맞춰주는 함수
  const padZero = (num) => (num < 10 ? `0${num}` : num);

  // 5️⃣ 시, 분, 초 추출
  const hours = padZero(currentTime.getHours());
  const minutes = padZero(currentTime.getMinutes());
  const seconds = padZero(currentTime.getSeconds());

  // 6️⃣ 날짜를 보기 좋은 형태로 포맷
  const dateString = currentTime.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <div
      style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '50px' }}
    >
      <h2>DIGITAL CLOCK</h2>
      {/* 시:분:초 표시 */}
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
        {hours}:{minutes}:{seconds}
      </div>
      {/* 날짜 표시 */}
      <div style={{ fontSize: '24px', marginTop: '10px' }}>{dateString}</div>
    </div>
  );
}
