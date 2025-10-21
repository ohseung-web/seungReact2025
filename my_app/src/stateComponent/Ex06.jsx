import React, { useState } from 'react';

export default function Exstate06() {
  const [size, setSize] = useState(16);
  return (
    <div>
      <p style={{ fontSize: size }}>커지는 글씨!</p>
      <button onClick={() => setSize(size + 2)}>크게</button>
    </div>
  );
}
