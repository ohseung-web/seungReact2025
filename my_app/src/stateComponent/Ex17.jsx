import React, { useState } from 'react';

export default function Exstate17() {
  const [style, setStyle] = useState({ size: 20, color: 'black' });
  return (
    <div>
      <p style={{ fontSize: style.size, color: style.color }}>변하는 글자!</p>
      <button
        onClick={() =>
          setStyle({
            size: style.size + 4,
            color: style.color === 'black' ? 'red' : 'black',
          })
        }
      >
        변화!
      </button>
    </div>
  );
}
