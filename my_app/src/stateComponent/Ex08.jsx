import React, { useState } from 'react';

export default function Exstate08() {
  const [like, setLike] = useState(true);
  return (
    <div>
      <p>{like ? '좋아요 👍' : '싫어요 👎'}</p>
      <button onClick={() => setLike(!like)}>변경</button>
    </div>
  );
}
