import React, { useState } from 'react';

export default function Exstate14() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  return (
    <div>
      <p>{time}</p>
      <button onClick={() => setTime(new Date().toLocaleTimeString())}>
        갱신
      </button>
    </div>
  );
}
