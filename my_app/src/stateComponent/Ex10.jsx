import React, { useState } from 'react';

export default function Exstate10() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={() => setNum(num - 1)}>-</button>
      <span>{num}</span>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}
