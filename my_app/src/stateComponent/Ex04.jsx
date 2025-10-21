import React, { useState } from 'react';

export default function Exstate04() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <p>👍 {like}</p>
      <button onClick={() => setLike(like + 1)}>좋아요</button>
    </div>
  );
}
