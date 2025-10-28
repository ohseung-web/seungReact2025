import { useState, useEffect } from 'react';

// EffectApp4.jsx — “cleanup 함수 이해”

//목표: 컴포넌트가 사라질 때 실행되는 cleanup 함수

function Message() {
  useEffect(() => {
    console.log('Message 컴포넌트 나타남');
    return () => console.log('Message 컴포넌트 사라짐');
  }, []);

  return <p>안녕하세요!</p>;
}
export default function Eff04() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>토글</button>
      {show && <Message />}
    </div>
  );
}
