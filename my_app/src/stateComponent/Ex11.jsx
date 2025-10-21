import React, { useState } from 'react';

export default function Exstate11() {
  const [bg, setBg] = useState('white');
  return (
    <div style={{ background: bg, height: '100px' }}>
      <input onChange={(e) => setBg(e.target.value)} placeholder="예: pink" />
    </div>
  );
}
