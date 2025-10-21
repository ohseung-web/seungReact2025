import React, { useState } from 'react';

export default function Exstate07() {
  const colors = ['red', 'green', 'blue'];
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div style={{ width: 100, height: 100, background: colors[index] }} />
      <button onClick={() => setIndex((index + 1) % colors.length)}>
        다음 색상
      </button>
    </div>
  );
}
