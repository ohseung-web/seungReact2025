import { useState } from 'react';

function Child({ onToggle }) {
  return <button onClick={onToggle}>모달 열기</button>;
}

export default function Parent() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Child onToggle={() => setOpen(true)} />
      {open && (
        <div>
          <h2>모달창입니다.</h2>
          <button onClick={() => setOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  );
}
