import React, { useState } from 'react';

export default function Exstate05() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>이미지 토글</button>
      {show && <img src="/vite.svg" alt="logo" />}
    </div>
  );
}
