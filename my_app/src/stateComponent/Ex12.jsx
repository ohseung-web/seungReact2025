import React, { useState } from 'react';

export default function Exstate12() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <button
        onClick={() => setItems([...items, `아이템 ${items.length + 1}`])}
      >
        추가
      </button>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
