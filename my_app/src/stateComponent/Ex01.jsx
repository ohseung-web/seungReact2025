import React, { useState } from 'react';

export default function Exstate01() {
  const [msg, setMsg] = useState('안녕하세요');
  return (
    <>
      <h2>{msg}</h2>
      <button
        onClick={() => setMsg(msg === '안녕하세요' ? 'Hello' : '안녕하세요')}
      >
        Toggle
      </button>
    </>
  );
}
