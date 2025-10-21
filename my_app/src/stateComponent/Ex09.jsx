import React, { useState } from 'react';

export default function Exstate09() {
  const [num, setNum] = useState(0);
  const numChange = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>{num}</p>
      <button onClick={numChange}>+</button>
      {num % 2 === 0 && <p>짝수입니다</p>}
    </div>
  );
}
