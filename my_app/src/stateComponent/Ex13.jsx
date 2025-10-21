import React, { useState } from 'react';

export default function Exstate13() {
  const [text, setText] = useState('');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setText('')}>초기화</button>
      <p>{text}</p>
    </div>
  );
  // const original = [1, 2, 3];
  // const shallow = [...original]; // ← 이게 얕은 복사!

  // // 1차원 배열은 문제없음
  // shallow[0] = 999;
  // console.log(original); // [1, 2, 3] - 원본 안전!
  // console.log(shallow); // [999, 2, 3]
}
