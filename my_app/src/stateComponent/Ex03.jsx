import React, { useState } from 'react';

export default function Exstate03() {
  const [color, setColor] = useState('tomato');
  return (
    <div style={{ background: color, width: 200, height: 200 }}>
      <button onClick={() => setColor('skyblue')}>색 변경</button>
    </div>
  );
}
