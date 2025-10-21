import React, { useState } from 'react';

export default function Exstate02() {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="입력하세요"
      />
      <p>입력한 내용: {text}</p>
    </div>
  );
}
