import React, { useState } from 'react';

export default function Exstate18() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <p>값: {num}</p>
      <Child18 increase={() => setNum(num + 1)} />
    </div>
  );
}

function Child18(Props) {
  return (
    <>
      <button onClick={Props.increase}>+1</button>
    </>
  );
}
