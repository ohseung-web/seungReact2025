import React, { useEffect, useState } from 'react';

export default function Ex08() {
  // 1️⃣ 첫 번째 숫자를 저장할 상태
  const [num1, setNum1] = useState(0);
  // 2️⃣ 두 번째 숫자를 저장할 상태
  const [num2, setNum2] = useState(0);
  // 3️⃣ 곱셈 결과를 저장할 상태
  const [result, setResult] = useState(0);

  // 4️⃣ num1 또는 num2가 변경될 때마다 곱셈을 계산
  useEffect(() => {
    const multiplication = num1 * num2; // 두 숫자를 곱함
    setResult(multiplication); // 결과를 상태에 저장하면 화면이 자동으로 업데이트됨

    // 콘솔에 계산 과정 출력 (개발자용)
    console.log(`${num1} × ${num2} = ${multiplication}`);

    // 5️⃣ 의존성 배열: [num1, num2]
    // num1이나 num2가 바뀔 때만 이 함수가 실행됨
  }, [num1, num2]);

  return (
    <div
      style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}
    >
      <h1>곱셈 계산기</h1>

      {/* 첫 번째 숫자 입력 */}
      <div style={{ marginBottom: '15px' }}>
        <label>첫 번째 숫자</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))} // 입력값을 숫자로 변환 후 상태 업데이트
          style={{ marginLeft: '10px', width: '80px' }}
        />
      </div>

      {/* 두 번째 숫자 입력 */}
      <div style={{ marginBottom: '15px' }}>
        <label>두 번째 숫자</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          style={{ marginLeft: '10px', width: '80px' }}
        />
      </div>

      {/* 곱셈 결과 표시 */}
      <div style={{ marginTop: '20px' }}>
        <div style={{ fontWeight: 'bold' }}>결과:</div>
        <div style={{ fontSize: '24px', color: '#0070f3' }}>{result}</div>
      </div>

      <p style={{ marginTop: '20px', color: '#666', fontSize: '0.9rem' }}>
        콘솔을 열면 계산 과정도 확인할 수 있습니다.
      </p>
    </div>
  );
}
